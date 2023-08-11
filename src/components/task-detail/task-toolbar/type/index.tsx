import {Popover} from '@mui/material';
import {FC, ReactNode, useState} from 'react';

import TypeItem from './item';

interface ITypeProps {
  data: {text: string; icon: string}[];
  trigger?: ReactNode;
  onSelect?: (value: string) => void;
}

export const Type: FC<ITypeProps> = ({data, trigger, onSelect}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (text: string) => {
    onSelect?.(text);
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <button onClick={handleClick}>{trigger}</button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
      >
        <div className="flex flex-col space-y-4 p-4">
          <p className="font-semibold">CHANGE ISSUE TYPE</p>
          {data.map(({text, icon}, index) => (
            <TypeItem key={index} text={text} icon={icon} onClick={() => handleSelect(text)} />
          ))}
        </div>
      </Popover>
    </div>
  );
};

export default Type;
