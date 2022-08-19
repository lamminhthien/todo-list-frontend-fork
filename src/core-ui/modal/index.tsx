import cn from 'classnames';
import {ReactNode} from 'react';
import Body from './body';
import Footer from './footer';
import Header from './header';

import styles from './style.module.scss';

interface IProps {
  open: boolean;
  children?: ReactNode;
}

const Modal: React.FC<IProps> = ({open, children}) => {
  return (
    <div className={cn(styles['com-modal'], open ? styles['show'] : '')} tabIndex={-1}>
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
