import React, { ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const Footer: React.FC<IProps> = ({ children }) => {
  return <div className="modal-footer">{children}</div>;
};

export default Footer;
