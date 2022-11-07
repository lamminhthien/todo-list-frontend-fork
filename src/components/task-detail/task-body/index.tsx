import classNames from 'classnames';
import {FC} from 'react';

import {ITaskResponse} from '@/data/api/types/task.type';

import TaskBodyLeft from '../task-body-left';
import TaskBodyRight from '../task-body-right';
import style from './style.module.scss';

interface ITaskBodyProps {
  className?: string;
  taskData: ITaskResponse;
  updateTaskData: () => void;
}

const TaskBody: FC<ITaskBodyProps> = ({taskData, updateTaskData, className}) => {
  return (
    <div className={classNames(style['task-body'], className)}>
      <TaskBodyLeft taskData={taskData} updateTaskData={updateTaskData} />
      <TaskBodyRight onSuccess={updateTaskData} taskData={taskData} />
    </div>
  );
};

export default TaskBody;
