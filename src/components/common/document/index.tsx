import React, {useState} from 'react';

import Icon from '@/core-ui/icon';

interface IProps {
  onClick?: () => void;
  iconDropdown?: any;
  content?: string;
}
const Document: React.FC<IProps> = ({onClick, content, iconDropdown}) => {
  const [showOptions, setShowOptions] = useState(false);
  function handleMouseEnter() {
    setShowOptions(true);
  }

  function handleMouseLeave() {
    setShowOptions(false);
  }
  return (
    <>
      <div
        className="flex cursor-pointer justify-between py-3 hover:bg-slate-100"
        onClick={onClick}
        onMouseOver={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex">
          <Icon name="drop" className={iconDropdown} />
          <p>{content}</p>
        </div>
        {showOptions && (
          <div className="mr-4">
            <Icon name="more-vertical" className="ico-more-horizontal mr-3" size={20} />
            <Icon name="plus" className="ico-plus" size={20} />
          </div>
        )}
      </div>
    </>
  );
};

export default Document;
