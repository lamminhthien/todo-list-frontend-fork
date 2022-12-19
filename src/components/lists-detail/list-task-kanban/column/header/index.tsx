import React, {ReactNode} from 'react';

import Icon from '@/core-ui/icon';
import {ITodolistResponse} from '@/data/api/types/todolist.type';
import useModals from '@/states/modals/use-modals';

interface IKanBanColumnHeader {
  name: string;
  children: ReactNode;
  todolist: ITodolistResponse;
  statusId: number;
}

export default function KanbanColumnHeader({children, name, todolist, statusId}: IKanBanColumnHeader) {
  const {setIsOpenModal, setSelectedTask, setSelectedTodolist, setSelectedStatusId} = useModals();

  const onAddTask = () => {
    setSelectedTask();
    setSelectedTodolist(todolist);
    setIsOpenModal('createTask');
    setSelectedStatusId(statusId);
  };

  return (
    <div className="kanban-header">
      <h3 className="text-center">{name}</h3>
      <Icon name="ico-plus-circle" className="flex justify-center hover:cursor-pointer" onClick={onAddTask} />

      {children}
    </div>
  );
}