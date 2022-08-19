import {ReactNode} from 'react';
import Button from '../button';

interface IProps {
  onClose?: () => void;
  children?: ReactNode;
}

const Header: React.FC<IProps> = ({children, onClose}) => {
  return (
    <div className="modal-header">
      {children}
      <Button text="x" onClick={onClose} />
    </div>
  );
};

export default Header;
