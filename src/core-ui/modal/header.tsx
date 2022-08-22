import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const Header: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <div className="modal-header">{children}</div>
    </>
  );
};

export default Header;
