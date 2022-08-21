import Button from "../../core-ui/button";
import Modal from "../../core-ui/modal";
import React from "react";

import styles from "./style.module.scss";

interface IProps {
  open: boolean;
  onClose?: () => void;
}

const ModalUpdateList: React.FC<IProps> = ({ open, onClose }) => {
  return (
    <div className={styles["com-modal-update-task"]}>
      <Modal open={open} onClose={onClose}>
        <Modal.Header>
          <h3 className="heading">Update task</h3>
        </Modal.Header>
        <Modal.Body>
          <input className="input" type="text" placeholder="Buy milk at 7pm " />
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn" text="Close" onClick={onClose} theme="white" />
          <Button className="btn" text="Save" />
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalUpdateList;
