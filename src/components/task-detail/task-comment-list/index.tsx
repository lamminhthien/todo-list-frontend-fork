import Link from 'next/link';

import Icon from '@/core-ui/icon';
import api from '@/data/api';
import {ITaskResponse} from '@/data/api/types/task.type';
import {getDate} from '@/utils/get-date';

import style from './style.module.scss';

interface ITaskCommentList {
  taskData: ITaskResponse;
  onSuccess?: () => void;
}

export const TaskCommentList = ({taskData, onSuccess}: ITaskCommentList) => {
  const onDelete = (id: number) => {
    api.task.update({id: taskData.id, comment: {update: {id, isActive: false}}}).then(onSuccess);
  };
  return (
    <div className={style['task-comment-list']}>
      {taskData?.comments?.map((comment, idx) => {
        if (comment.isActive)
          return (
            <div key={idx} className="task-comment">
              <div className="user">
                <Icon name="ico-user" />
                <p>{comment.user.name}</p>
                <div className="time">{getDate(new Date(comment.createdDate))}</div>
              </div>
              <div className="content">
                <p>{comment.comment}</p>
              </div>
              <div className="action">
                <Link href={'#'}>Edit</Link>
                <button className="text-blue-500 underline" onClick={() => onDelete(comment.id)}>
                  Delete
                </button>
              </div>
            </div>
          );
      })}
    </div>
  );
};
