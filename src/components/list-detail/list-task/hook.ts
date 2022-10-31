import {DragEndEvent, UniqueIdentifier} from '@dnd-kit/core';
import {useState} from 'react';

import {ITaskResponse} from '@/data/api/types/task.type';
import {useSensorGroup} from '@/lib/dnd-kit/sensor/sensor-group';

export default function useListTask() {
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
    }
  }
}
