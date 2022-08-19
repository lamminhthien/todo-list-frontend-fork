import {IPropsBase} from '@/types';
import Modal from '@/core-ui/modal';

interface IProps extends IPropsBase {
  open: boolean;
  onClose?: () => void;
}

const ModalCreateTask: React.FC<IProps> = ({open, onClose}) => {
  return (
    <>
      <Modal open={open} onClose={onClose}>
        <h1>Modal Create Task</h1>
      </Modal>
    </>
  );
};

export default ModalCreateTask;
