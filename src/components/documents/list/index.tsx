import cls from 'classnames';
import React, {useState} from 'react';

import Document from '@/components/common/document';
import Icon from '@/core-ui/icon';
import useModals from '@/states/modals/use-modals';

import style from './style.module.scss';

interface IItemProps {
  listId: string;
}

const DocumentList: React.FC<IItemProps> = ({listId}) => {
  const [showFavorite, setShowFavorite] = useState([]);
  const [showPages, setShowPages] = useState([]);
  const {setIsOpenModal} = useModals();
  const onNew = () => {
    setIsOpenModal('createDocument');
  };
  function toggleShow(
    i: number,
    set: {
      (value: React.SetStateAction<never[]>): void;
      (value: React.SetStateAction<never[]>): void;
      (arg0: (prevState: any) => any): void;
    }
  ) {
    set(prevState => {
      if (prevState.includes(i)) return prevState.filter((item: any) => item !== i);
      else return [...prevState, i];
    });
  }
  return (
    <div className={style['document-list']}>
      <div className="mb-3 flex justify-between">
        <h4 className="font-bold">Documents</h4>
        <Icon name="add" className="ico-plus-circle cursor-pointer text-sky-500" onClick={onNew} />
      </div>
      <hr />
      <div>
        <p className="mt-3 font-bold">Favorite</p>
        {[1, 2, 3].map(i => (
          <div key={i}>
            <Document
              content="CSS"
              onClick={() => toggleShow(i, setShowFavorite)}
              iconDropdown={showFavorite.includes(i) ? 'ico-angle-down-small' : 'ico-angle-right-small'}
            />
            <div className={cls(showFavorite.includes(i) ? 'block' : 'hidden', `ml-4`)}>
              {[2, 3].map(k => (
                <Document content="CSS" key={k} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div>
        <p className="mt-3 font-bold">Pages</p>
        {[7, 8, 9].map(i => (
          <div key={i}>
            <Document
              content="Tim hieu ve React"
              onClick={() => toggleShow(i, setShowPages)}
              iconDropdown={showFavorite.includes(i) ? 'ico-angle-down-small' : 'ico-angle-right-small'}
            />
            <div className={cls(showPages.includes(i) ? 'block' : 'hidden', `ml-4`)}>
              {[7, 8, 9].map(k => (
                <Document content="React" key={k} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentList;
