import {FC, useEffect, useState} from 'react';

import api from '@/data/api';
import {ITaskResponse} from '@/data/api/types/task.type';

import TaskBody from './task-body';
import TaskToolbar from './task-toolbar';

interface IProps {
  task: ITaskResponse;
}

const TaskDetail: FC<IProps> = ({task}) => {
  const [taskData, setTaskData] = useState<ITaskResponse>();

  const updateTaskData = () => {
    api.task.getOne({id: task.id}).then(res => {
      setTaskData({...res.data});
    });
  };

  useEffect(() => {
    updateTaskData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!taskData) return null;

  return (
    <div className="container">
      <TaskToolbar taskData={taskData} />
      <TaskBody {...{taskData, updateTaskData}} />
    </div>
  );
};

export default TaskDetail;
