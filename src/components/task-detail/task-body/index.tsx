import {TextField} from '@mui/material';
import classNames from 'classnames';
import {ChangeEvent, FC, useState} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';

import UploadImage from '@/components/task-detail/upload-image';
import Button from '@/core-ui/button';
import Icon from '@/core-ui/icon';
import useToast from '@/core-ui/toast';
import api from '@/data/api';
import {ITaskResponse} from '@/data/api/types/task.type';

import TaskImages, {IPreviewImage} from '../task-image';
import style from './style.module.scss';

interface ITaskBodyProps {
  className?: string;
  taskData: ITaskResponse;
  updateTaskData: () => void;
}

interface IFormInputs {
  description: string;
}

const TaskBody: FC<ITaskBodyProps> = ({taskData, updateTaskData, className}) => {
  const [previewImages, setPreviewImages] = useState<IPreviewImage[]>([]);
  const [editDescription, setEditDescription] = useState(false);
  const {handleSubmit, formState, register} = useForm<IFormInputs>({mode: 'onChange'});
  const {isSubmitting} = formState;

  const toast = useToast();

  const submitHandler: SubmitHandler<IFormInputs> = formData => {
    if (taskData) {
      api.task
        .update({id: taskData.id, ...formData})
        .then(() => {
          updateTaskData();
          toast.show({type: 'success', title: 'Update Description', content: 'success'});
        })
        .then(() => setEditDescription(false))
        .catch(() => toast.show({type: 'danger', title: 'Error', content: 'An error occurred, please try again'}));
    }
  };

  const onUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      const images = [];
      for (let i = 0; i < e.target.files.length; i++) {
        const element = e.target.files[i];
        images.push({name: element.name, link: URL.createObjectURL(element)});
      }
      setPreviewImages(images);
    }
  };

  const onSuccess = () => {
    console.log('🚀 ~ file: index.tsx ~ line 62 ~ onSuccess ~ onSuccess');
    updateTaskData();
    setPreviewImages([]);
  };

  return (
    <div className={classNames(style['task-body'], className)}>
      <div className="title">
        <Icon name="ico-description" />
        <h4>Description</h4>
      </div>
      {!editDescription ? (
        <div className="description-text" onClick={() => setEditDescription(true)}>
          {taskData.description || 'No description'}
        </div>
      ) : (
        <form className="decsription-form" onSubmit={handleSubmit(submitHandler)}>
          <TextField className=" w-full bg-white" multiline rows={4} {...register('description')} defaultValue={taskData.description} />
          <div className="mt-5 flex gap-5">
            <Button className="w-24" variant="contained" color="primary" text="Save" type="submit" loading={isSubmitting} disabled={isSubmitting} />
            <Button className="w-24" variant="outlined" color="white" text="Cancel" onClick={() => setEditDescription(false)} type="button" />
          </div>
        </form>
      )}

      <div className="title">
        <Icon name="ico-attachment" />
        <h4>Attachments</h4>
      </div>
      <TaskImages className="task-images" images={[...taskData.taskImages?.map(e => e.image), ...previewImages]} />
      <UploadImage {...{taskData, onUpload, previewImages, onSuccess}} />

      <div className="title">
        <Icon name="ico-message-circle" />
        <h4>Comments</h4>
      </div>
      <form className="comments-form">
        <TextField className=" w-full bg-white" multiline rows={2} />
        <div className="mt-5 flex gap-5">
          <Button className="w-24" variant="contained" color="primary" text="Save" type="submit" />
          <Button className="w-24 text-blue-500" variant="outlined" color="white" text="Close" type="button" />
        </div>
      </form>
    </div>
  );
};
export default TaskBody;
