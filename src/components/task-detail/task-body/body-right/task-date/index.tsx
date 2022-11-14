import classNames from 'classnames';
import {FC, HTMLAttributes} from 'react';

import useTask from '@/components/task-detail/hooks/use-task';

import DueDate from './due-date';
import StartDate from './start-date';

const TaskDate: FC<HTMLAttributes<HTMLDivElement>> = ({className}) => {
  const {task} = useTask();
  return (
    <div className={classNames('date', className)}>
      <StartDate startDate={task.startDate} className="mobile" />
      <DueDate dueDate={task.dueDate} className="mobile" />
    </div>
  );
};
export default TaskDate;
