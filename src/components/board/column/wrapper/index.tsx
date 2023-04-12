import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import React, {FC, ReactNode} from 'react';

interface IKanbanColumnWrapperProps {
  children: ReactNode;
  id: string;
}

const KanbanColumnWrapper: FC<IKanbanColumnWrapperProps> = ({id, children}) => {
  const {attributes, listeners, setNodeRef, transform, transition, isDragging} = useSortable({id});
  const styleDnd = {transform: CSS.Transform.toString(transform), transition, opacity: isDragging ? 0.5 : 1};

  return (
    <ul className="kanban-column-container h-full" ref={setNodeRef} style={styleDnd} {...attributes} {...listeners}>
      {children}
    </ul>
  );
};

export default KanbanColumnWrapper;
