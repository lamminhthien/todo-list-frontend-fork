import {FC} from 'react';

import Icon from '@/core-ui/icon';

import useTopbar from '../topbar/hook';
import style from './style.module.scss';
import ToolBarLeft from './toolbar-left';
import ToolBarRight from './toolbar-right';

interface IProps {
  option?: boolean;
}
const ToolBarListDetail: FC<IProps> = ({option = true}) => {
  const {currentPage, returnTo} = useTopbar();
  return (
    <>
      <div className={style['toolbar-container']}>
        {option ? (
          <>
            <ToolBarLeft />
            <ToolBarRight />
          </>
        ) : (
          <div className="flex cursor-pointer items-center" onClick={() => returnTo(currentPage)}>
            <Icon name="back" className="ico-arrow-reply text-sky-500" size={24} />
            <span className="mx-3 font-semibold text-sky-500">Back to list</span>
          </div>
        )}
      </div>
    </>
  );
};

export default ToolBarListDetail;
