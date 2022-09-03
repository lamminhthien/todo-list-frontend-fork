import {useRouter} from 'next/router';
import React, {FC} from 'react';

import API, {ITodo} from '@/api/network/todo';
import {ROUTES} from '@/configs/routes.config';
import Button from '@/core-ui/button';
import {Modal} from '@/core-ui/modal';

import styles from './style.module.scss';

interface IProps {
  data: ITodo;
  open: boolean;
  page?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
}

const ModalTodoConfirmDelete: FC<IProps> = ({data, open, page, onCancel, onConfirm}) => {
  const router = useRouter();

  const deletePost = () => {
    if (data?.id)
      API.deleteTodo(data?.id).then(() => {
        onConfirm?.();

        if (page == 'detail') {
          router.push(ROUTES.TODO);
        }
      });
  };

  if (!data) return null;

  return (
    <div className={styles['com-modal-todo-confirm-delete']}>
      <Modal variant="center" open={open} onClose={() => onConfirm?.()}>
        <Modal.Header>Delete Todo</Modal.Header>
        <Modal.Body>
          <h3 className="title">Are you sure you want to delete list {data.name}?</h3>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outlined" color="secondary" text="Cancel" onClick={onCancel} />
          <Button variant="contained" color="primary" text="Delete" onClick={deletePost} />
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalTodoConfirmDelete;
