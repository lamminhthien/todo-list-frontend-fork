import {FC} from 'react';

import {ITaskResponse} from '@/data/api/types/task.type';

import Assignee from './assignee';
import DueDate from './due-date';
import Piority from './piority';
import Point from './point';
import StartDate from './start-date';
import Status from './status';
import style from './style.module.scss';
import TimeState from './time-state';

interface IBodyRightProps {
  taskData: ITaskResponse;
  onSuccess?: () => void;
}

const TaskBodyRight: FC<IBodyRightProps> = props => {
  const {taskData} = props;
  return (
    <div className={style['task-body-right']}>
      <div className="container">
        <Status {...props} />
        <Assignee />
        <Piority />
        <Point />
        <StartDate />
        <DueDate />
        <TimeState taskData={taskData} />
      </div>
    </div>
  );
};

export default TaskBodyRight;
