import React, {FC} from 'react';

import KanbanColumnBody from './body';
import KanbanColumnFooter from './footer/add-task';
import KanbanColumnHeader from './header';
import KanbanColumnWrapper from './wrapper';

export interface IKanbanColumnProps {
  columnId: string;
  name: string;
  color: string;
  taskIds: string[];
}

const KanbanColumn: FC<IKanbanColumnProps> = ({columnId, name, color, taskIds}) => {
  return (
    <KanbanColumnWrapper id={'column' + columnId}>
      <KanbanColumnHeader name={name} color={color} />
      <KanbanColumnBody id={columnId} taskIds={taskIds} />
      <KanbanColumnFooter id={Number(columnId)} />
    </KanbanColumnWrapper>
  );
};

export default KanbanColumn;
