import React from 'react';

import Button from '@/core-ui/button';
import Icon from '@/core-ui/icon';

import style from './style.module.scss';

const DocumentContent: React.FC = () => {
  return (
    <div className={style['document-content']}>
      <div className="">
        <Icon name="content" className="ico-fluent_text-description mr-1" size={20} />
        <span className="mr-3">Content</span>
        <Button text="Edit" className="bg-slate-100" />
      </div>
    </div>
  );
};

export default DocumentContent;
