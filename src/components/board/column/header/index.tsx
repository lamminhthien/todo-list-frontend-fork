import React, {FC, memo} from 'react';

import style from './style.module.scss';

interface IKanbanColumnHeaderProps {
  name: string;
  color: string;
  numberTasks?: number;
}

const KanbanColumnHeader: FC<IKanbanColumnHeaderProps> = ({name, color, numberTasks}) => {
  return (
    <div className={style['kanban-column-header']}>
      <p className="column-name" style={{color}}>
        {`${name} (${numberTasks ? numberTasks : 0})`}
      </p>
    </div>
  );
};

export default memo(KanbanColumnHeader);
