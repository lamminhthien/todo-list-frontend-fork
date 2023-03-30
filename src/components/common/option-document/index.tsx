import cls from 'classnames';
import Link from 'next/link';
import React, {FC} from 'react';

import style from './style.module.scss';

interface IProps {
  className: string;
}
const OptionDocument: FC<IProps> = ({className}) => {
  return (
    <div className={cls(className, style.options)}>
      <Link href="">Rename</Link>
      <Link href="">Add to Favorate</Link>
      <Link href="">Delete</Link>
    </div>
  );
};

export default OptionDocument;
