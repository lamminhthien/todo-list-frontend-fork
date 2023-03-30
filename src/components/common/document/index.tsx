import React, {useState} from 'react';

import Icon from '@/core-ui/icon';

import OptionDocument from '../option-document';

interface IProps {
  onClick?: () => void;
  iconDropdown?: any;
  content?: string;
}
const Document: React.FC<IProps> = ({onClick, content, iconDropdown}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [showPopupOptions, setShowPopupOptions] = useState(false);

  function handleMouseEnter() {
    setShowOptions(true);
  }

  function handleMouseLeave() {
    setShowOptions(false);
  }
  return (
    <div className="relative">
      <div
        className="flex cursor-pointer justify-between py-3 hover:bg-slate-100"
        onMouseOver={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex w-full" onClick={onClick}>
          <Icon name="drop" className={iconDropdown} />
          <p>{content}</p>
        </div>
        {showOptions && (
          <div className="mr-4">
            <Icon
              name="more-vertical"
              className="ico-more-horizontal mr-3"
              size={20}
              onClick={() => {
                setShowPopupOptions(!showPopupOptions);
              }}
            />
            <Icon name="plus" className="ico-plus" size={20} />
          </div>
        )}
      </div>
      {showPopupOptions && <OptionDocument className="absolute left-[70%] z-10" />}
    </div>
  );
};

export default Document;
