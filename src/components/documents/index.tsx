import React, {FC} from 'react';

import DocumentContent from './content';
import DocumentList from './list';

interface IProps {
  id: string;
}
const Documents: FC<IProps> = ({id}) => {
  console.log('🚀 ~ file: index.tsx:10 ~ id:', id);
  return (
    <div className="flex">
      <DocumentList />
      <DocumentContent />
    </div>
  );
};

export default Documents;
