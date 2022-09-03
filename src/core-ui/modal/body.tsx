import React, {FC, ReactNode} from 'react';

export interface IModalBodyProps {
  children: ReactNode;
}

const Body: FC<IModalBodyProps> = ({children}) => {
  return <div className="abc-modal-body scrollbar">{children}</div>;
};

export default Body;
