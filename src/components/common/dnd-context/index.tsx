import {DndContext, DragEndEvent, UniqueIdentifier} from '@dnd-kit/core';
import {restrictToVerticalAxis} from '@dnd-kit/modifiers';
import {arrayMove} from '@dnd-kit/sortable';
import {useState} from 'react';

import api from '@/data/api';
import {ITodolistResponse} from '@/data/api/types/list.type';
import {ITaskResponse} from '@/data/api/types/task.type';
import {socketUpdateList} from '@/data/socket';
import {useSensorGroup} from '@/lib/dnd-kit/sensor/sensor-group';

interface IProp {
  list: ITodolistResponse;
  setList: (list: ITodolistResponse) => void;
}

const DNDContext = ({list, setList}: IProp) => {
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);

  const sensor = useSensorGroup();

  function handleDragEnd({active, over}: DragEndEvent) {
    setActiveId(null);
    if (!over) return;
    if (active.id !== over.id) {
      const taskList: ITaskResponse[] = list!.tasks;
      const oldIndex = taskList?.findIndex(item => active.id === item.id);
      const newIndex = taskList?.findIndex(item => over.id === item.id);
      const arrangeTask = arrayMove(list!.tasks, oldIndex!, newIndex!);
      const newTodoList = {...list};
      newTodoList.tasks = arrangeTask;
      setList(newTodoList as ITodolistResponse);

      arrangeTask.forEach((element, index) => {
        if (element.id === active.id) {
          const taskFirstId = arrangeTask[index - 1]?.id;
          const taskReorderId = arrangeTask[index].id!;
          const taskSecondId = arrangeTask[index + 1]?.id;
          api.task
            .reIndex({taskFirstId, taskReorderId, taskSecondId})
            .then(socketUpdateList)
            .catch(() => {});
        }
      });

      return {over_id: over.id, active_id: active.id, active: activeId};
    }
  }

  return (
    <>
      <DndContext
        sensors={sensor}
        modifiers={[restrictToVerticalAxis]}
        onDragCancel={() => setActiveId(null)}
        onDragStart={({active}) => {
          if (!active) {
            return;
          }
          setActiveId(active.id);
        }}
        onDragEnd={handleDragEnd}
      ></DndContext>
    </>
  );
};

export default DNDContext;
