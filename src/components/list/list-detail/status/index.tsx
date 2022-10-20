import {MenuItem, Select, SelectProps} from '@mui/material';
import classNames from 'classnames';
import {FC, forwardRef} from 'react';

import style from './style.module.scss';

interface IItem {
  name: string;
  value: number;
}
interface IProps extends SelectProps {
  className?: string;
  items?: IItem[];
  defaultValue: number;
}

const Status: FC<IProps> = forwardRef(({items, className, defaultValue, ...rest}, ref) => {
  return (
    <div className={classNames(style.status, className)}>
      {items && items.length > 0 && (
        <Select ref={ref} {...rest} className={style['status-button']} defaultValue={defaultValue}>
          {items.map(({name, value}) => {
            return (
              <MenuItem key={value} value={value}>
                {name}
              </MenuItem>
            );
          })}
        </Select>
      )}
    </div>
  );
});
Status.displayName = 'Status';

export default Status;
