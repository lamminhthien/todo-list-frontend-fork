import React, {FC} from 'react';

import Column from '../column';
import TaskItem from '../column/task-item';
import {ITaskResponse} from '@/data/api/types/task.type';
import {IMember} from '@/data/api/types/todolist.type';

interface ICompleteColumnProps {
  className?: string | undefined;
  completeTasks: ITaskResponse[];
  addTask: () => void;
  symbol: string;
  members: IMember[];
}

const CompleteColumn: FC<ICompleteColumnProps> = ({className, completeTasks, symbol, members, addTask}) => {
  return (
    <Column
      addTask={addTask}
      className={className}
      title={'Complete'}
      symbol={symbol}
      borderBotColor={'border-blue-400'}
    >
      {!completeTasks.length ? (
        <div className="w-96 bg-gray-50 py-6 px-5">No Task!</div>
      ) : (
        completeTasks.map((task, index) => (
          <TaskItem
            key={index}
            // description={task.description}
            description="
                      Lorem ipsum dolor sit amet consectet. Sed diam sociis odio neque amet sed gravida amet consecte tre
                      "
            title={task.name}
            assignees={task.assignees}
            members={members}
          />
        ))
      )}
    </Column>
  );
};

export default CompleteColumn;
