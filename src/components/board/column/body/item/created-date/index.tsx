import React, {FC, memo} from 'react';

import Icon from '@/core-ui/icon';

import style from './style.module.scss';

interface IKanbanTaskCreatedDate {
  date: string;
}

const KanbanTaskCreatedDate: FC<IKanbanTaskCreatedDate> = props => {
  const date = new Date(props.date);
  const month = date.toLocaleString('default', {month: 'long'});
  const day = date.getDay().toString();

  return (
    <div className={style['kanban-task-created-date']}>
      <Icon name="ico-clock" size={16} className="btn-created-date" />
      <div className="date">{`${month} ${day}`}</div>
    </div>
  );
};

export default memo(KanbanTaskCreatedDate);
