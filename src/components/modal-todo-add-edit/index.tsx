import {yupResolver} from '@hookform/resolvers/yup';
import React, {FC, useEffect} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import * as yup from 'yup';

import API, {ITodo} from '@/api/network/todo';
import Button from '@/core-ui/button';
import {Modal} from '@/core-ui/modal';

import styles from './style.module.scss';

interface IProps {
  data: ITodo;
  open: boolean;
  onCancel?: () => void;
  onSave?: () => void;
}

interface IFormInputs {
  name: string;
}

const Schema = yup.object().shape({
  name: yup.string().required()
});

const ModalTodoAddEdit: FC<IProps> = ({data, open, onCancel, onSave}) => {
  const {register, handleSubmit, setValue, formState} = useForm<IFormInputs>({
    defaultValues: {
      name: ''
    },
    resolver: yupResolver(Schema)
  });

  const {errors} = formState;

  const getTodo = (id: string) => {
    API.getTodo(id).then(res => {
      const resp = res.data as ITodo;
      setValue('name', resp.name);
    });
  };

  const onSubmit: SubmitHandler<IFormInputs> = formData => {
    if (data?.id) {
      API.updateTodo(data.id, formData).then(() => onSave?.());
    } else {
      API.createTodo(formData).then(() => onSave?.());
    }
  };

  useEffect(() => {
    if (data?.id) getTodo(data.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className={styles['com-modal-todo-add-edit']}>
      <Modal open={open} variant="center" onClose={() => onSave?.()}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Header>
            <h3 className="title">{data?.id ? 'Update list' : 'Create New List'}</h3>
          </Modal.Header>
          <Modal.Body>
            <input className="form-input" {...register('name')} placeholder="Enter your list" />
            {errors.name && <p>{errors.name.message}</p>}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outlined" color="secondary" text="Cancel" onClick={onCancel} />
            <Button variant="contained" color="primary" text="Save" type="submit" />
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default ModalTodoAddEdit;
