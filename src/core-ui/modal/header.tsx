import React, {FC, ReactNode} from 'react';

import {useModal} from './modal';

export interface IModalHeaderProps {
  text?: string;
  children?: ReactNode;
}

const Header: FC<IModalHeaderProps> = ({text, children}) => {
  const {onClose} = useModal();

  const content = text ? <h5>{text}</h5> : children;

  return (
    <div className="abc-modal-header">
      {content}
      <button
        className="abc-modal-close"
        type="button"
        onClick={() => {
          onClose(false);
        }}
      >
        &times;
      </button>
    </div>
  );
};

export default Header;
