import React, { ReactNode } from "react";
import cn from "classnames";

import styles from "./style.module.scss";
import Button from "../button";
import Header from "./header";
import Body from "./body";
import Footer from "./footer";

interface IProps {
  children?: ReactNode;
  open: boolean;
  onClose?: () => void;
}

const Modal: React.FC<IProps> = ({ children, open, onClose }) => {
  return (
    <div className={cn(styles["com-modal"], open ? cn(styles["show"]) : "")}>
      <div className="modal-dialog">
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
