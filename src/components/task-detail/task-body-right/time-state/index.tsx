import {FC} from 'react';

import {ITaskResponse} from '@/data/api/types/task.type';
import {getDate} from '@/utils/get-date';

interface ITimeStateProps {
  taskData: ITaskResponse;
}
const TimeState: FC<ITimeStateProps> = ({taskData}) => {
  const createdDate = getDate(new Date(taskData.createdDate));
  const updatedDate = getDate(new Date(taskData.updatedDate));
  return (
    <div className="time-state">
      <div className="created-date">
        <p>{'Created at ' + createdDate}</p>
      </div>
      <div className="updated-date">
        <p>{'Updated at ' + updatedDate}</p>
      </div>
    </div>
  );
};
export default TimeState;
