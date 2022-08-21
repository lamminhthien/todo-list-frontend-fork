import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const Body: React.FC<IProps> = ({ children }) => {
  return <div className="modal-body">{children}</div>;
};

export default Body;
