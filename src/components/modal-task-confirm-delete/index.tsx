import {FC} from 'react';

import TaskAPI, {ITask} from '@/api/network/task';
import Button from '@/core-ui/button';
import {Modal} from '@/core-ui/modal';

import styles from './style.module.scss';

interface IProps {
  data?: ITask;
  open: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
}

const ModalTaskConfirmDelete: FC<IProps> = ({data, open, onCancel, onConfirm}) => {
  const deletePost = () => {
    if (data?.id) TaskAPI.deleteTask(data?.id).then(() => onConfirm?.());
  };

  if (!data) return null;

  return (
    <div className={styles['com-modal-task-confirm-delete']}>
      <Modal open={open} variant="center" onClose={() => onCancel?.()}>
        <Modal.Header>Delete task</Modal.Header>
        <Modal.Body>
          <h3 className="title">Are you sure you want to delete task {data.name}</h3>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outlined" color="secondary" text="Cancel" onClick={onCancel} />
          <Button variant="contained" color="primary" text="Delete" onClick={deletePost} />
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalTaskConfirmDelete;
