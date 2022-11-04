import {TextField} from '@mui/material';
import {FC} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';

import Button from '@/core-ui/button';
import Icon from '@/core-ui/icon';
import api from '@/data/api';
import {ITaskResponse} from '@/data/api/types/task.type';

import style from './style.module.scss';

interface IFormInputs {
  comment: string;
}

interface ITaskCommentFormProps {
  taskData: ITaskResponse;
  onSuccess?: () => void;
}

export const TaskCommentForm: FC<ITaskCommentFormProps> = ({taskData, onSuccess}) => {
  const {handleSubmit, formState, register} = useForm<IFormInputs>({mode: 'onChange'});
  const {isSubmitting} = formState;

  const submitHandler: SubmitHandler<IFormInputs> = ({comment}) => {
    api.task
      .update({id: taskData.id, comment: {create: {comment}}})
      .then(onSuccess)
      .catch(error => console.log(error));
  };

  return (
    <div className={style['task-comment-form']}>
      <div className="title">
        <Icon name="ico-message-circle" />
        <h4>Comments</h4>
      </div>
      <form className="comments-form" onSubmit={handleSubmit(submitHandler)}>
        <TextField className=" w-full bg-white" multiline rows={1} {...register('comment')} />
        <div className="mt-5 flex gap-5">
          <Button className="w-24" variant="contained" color="primary" text="Save" type="submit" loading={isSubmitting} disabled={isSubmitting} />
          <Button className="w-24 text-blue-500" variant="outlined" color="white" text="Close" type="button" />
        </div>
      </form>
    </div>
  );
};
