import {IPropsBase} from '@/types';
import Modal from '@/core-ui/modal';
import Button from '@/core-ui/button';

interface IProps extends IPropsBase {
  open: boolean;
  onClose?: () => void;
}

const ModalCreateList: React.FC<IProps> = ({open, onClose}) => {
  return (
    <>
      <Modal open={open}>
        <Modal.Header onClose={onClose}>
          <h1>Modal Create List</h1>
        </Modal.Header>
        <Modal.Body>
          <p>Lorem ipsum dolor sit amet.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onClose} text="Close" />
          <Button text="Save Change" />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCreateList;
