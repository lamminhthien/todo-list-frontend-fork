import React, {FC, memo} from 'react';

import Icon from '@/core-ui/icon';
import {PriorityColors, PriorityIcons} from '@/utils/constant';

import style from './style.module.scss';

interface IKanbanTaskPriorityProps {
  priority: keyof typeof PriorityIcons;
}

const KanbanTaskPriority: FC<IKanbanTaskPriorityProps> = ({priority}) => {
  return (
    <div className={style['kanban-task-priority']}>
      <div className="h-[30px] w-[30px]">
        <div className={`${style.inner}`}>
          <Icon name={PriorityIcons[priority]} style={{color: PriorityColors[priority]}} />
        </div>
      </div>
    </div>
  );
};

export default memo(KanbanTaskPriority);
