import {yupResolver} from '@hookform/resolvers/yup';
import {FC, useEffect} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import * as yup from 'yup';

import API, {ITask} from '@/api/network/task';
import Button from '@/core-ui/button';
import {Modal} from '@/core-ui/modal';

import styles from './style.module.scss';

interface IProps {
  data: ITask;
  open: boolean;
  onSave?: () => void;
  onCancel?: () => void;
}

interface IFormInputs {
  name: string;
}

const Schema = yup.object().shape({
  name: yup.string().required('Please enter your task name.')
});

const ModalTaskAddEdit: FC<IProps> = ({data, open, onSave, onCancel}) => {
  const {register, handleSubmit, setValue, formState} = useForm<IFormInputs>({
    defaultValues: {
      name: ''
    },
    resolver: yupResolver(Schema)
  });

  const {errors} = formState;

  const getTask = (id: string) => {
    API.getTask(id).then(res => {
      const resp = res.data as ITask;
      setValue('name', resp.name);
    });
  };

  const onSubmit: SubmitHandler<IFormInputs> = formData => {
    if (data?.id) {
      API.updateTask(data.id, formData).then(() => onSave?.());
    } else {
      API.createTask(formData).then(() => onSave?.());
    }
  };

  useEffect(() => {
    if (data?.id) getTask(data.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <Modal variant="center" onClose={() => onSave?.()} open={open}>
      <div className={styles['com-modal-task-add-edit']}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Header>
            <h3 className="title">{data?.id ? 'Update task' : 'Add New To-Do'}</h3>
          </Modal.Header>
          <Modal.Body>
            <input className="form-input" placeholder="Enter your task" type="text" {...register('name')} />
            {errors.name && <p>{errors.name.message}</p>}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outlined" color="secondary" text="Cancel" onClick={onCancel} />
            <Button variant="contained" color="primary" text="Save" type="submit" />
          </Modal.Footer>
        </form>
      </div>
    </Modal>
  );
};

export default ModalTaskAddEdit;
