import React from 'react';

import TaskAssignee from '@/components/common/task-assignee';
import {IAssigneeResponse} from '@/data/api/types/task.type';
import {IMember} from '@/data/api/types/todolist.type';
import {socketUpdateList} from '@/data/socket';
import useTodolistKanban from '@/states/todolist-kanban/use-kanban';

interface IKanbanTaskAssignee {
  id: string;
  assignees: IAssigneeResponse[];
  assigneeList?: IMember[];
}

export default function KanbanTaskAssignee({id, assignees, assigneeList}: IKanbanTaskAssignee) {
  const {write} = useTodolistKanban();
  return (
    <div className="kanban-task-assignee">
      <TaskAssignee
        {...{
          id,
          assignees,
          onSuccess: socketUpdateList,
          assigneeList
        }}
        readonly={write}
        sx={{position: 'absolute'}}
        hideIconWhenClick={false}
      />
    </div>
  );
}
