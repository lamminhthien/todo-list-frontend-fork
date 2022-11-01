import classNames from 'classnames';
import {FC} from 'react';

import Button from '@/core-ui/button';
import Icon from '@/core-ui/icon';
import {ITaskResponse} from '@/data/api/types/task.type';

import style from './style.module.scss';

interface ITaskToolbarProps {
  className?: string;
  taskData: ITaskResponse;
}
const TaskToolbar: FC<ITaskToolbarProps> = ({taskData, className}) => {
  return (
    <div className={classNames(style.toolbar, className)}>
      <div className="header">
        <div className="left">
          <Icon name="ico-task" size={32} />
          <h2 className="text-h2"> {taskData.name}</h2>
        </div>
        <div className="right">
          <Button>
            <Icon name="ico-trash-2" />
            <span> Delete Task</span>
          </Button>
          <Button>
            <Icon name="ico-share-2" />
            <span> Share </span>
          </Button>
        </div>
      </div>
      <div className="status">
        In the <span>In-Review</span> list
      </div>
    </div>
  );
};
export default TaskToolbar;
