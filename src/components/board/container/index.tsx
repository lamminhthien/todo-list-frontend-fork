import {DndContext, DragOverlay} from '@dnd-kit/core';
import {horizontalListSortingStrategy, SortableContext} from '@dnd-kit/sortable';
import React, {FC, useEffect, useState} from 'react';

import KanbanColumn, {IKanbanColumnProps} from '../column';
import KanbanTaskItem from '../column/body/item';
import useKanbanContainer from './hook';
import style from './style.module.scss';

const KanbanContainer: FC = () => {
  const {
    boardData,
    statusList,
    sensors,
    handleDragCancel,
    handleDragEnd,
    handleDragOver,
    handleDragStart,
    taskActive,
    columnDragActive,
    columnOrderState
  } = useKanbanContainer();

  const [columns, setColumns] = useState<IKanbanColumnProps[]>([]);
  const [columnActive, setColumnActive] = useState<IKanbanColumnProps>();

  useEffect(() => {
    setColumns(
      columnOrderState.map(columnId => {
        const status = statusList.find(e => String(e.id) === columnId);
        const name = status?.name || '';
        const color = status?.color || '';
        const taskIds = boardData[Number(columnId)];
        return {columnId, color, name, taskIds};
      })
    );
  }, [boardData]);

  useEffect(() => {
    if (columnDragActive) {
      const status = statusList.find(e => String(e.id) === columnDragActive);
      const name = status?.name || '';
      const color = status?.color || '';
      const taskIds = boardData[Number(columnDragActive)];
      setColumnActive({columnId: columnDragActive, color, name, taskIds});
    }
  }, [columnDragActive]);

  return (
    <div className={style['kanban-container']}>
      <div className="inner">
        <DndContext
          sensors={sensors}
          onDragStart={handleDragStart}
          onDragCancel={handleDragCancel}
          onDragOver={handleDragOver}
          onDragEnd={handleDragEnd}
          autoScroll={true}
        >
          <SortableContext id="drag-column" items={[...columnOrderState]} strategy={horizontalListSortingStrategy}>
            {columns.map(column => (
              <KanbanColumn key={column.columnId} {...column} />
            ))}
          </SortableContext>
          {taskActive && (
            <DragOverlay>
              <KanbanTaskItem id={String(taskActive)} />
            </DragOverlay>
          )}
          {columnActive && (
            <DragOverlay>
              <KanbanColumn {...columnActive} />
            </DragOverlay>
          )}
        </DndContext>
      </div>
    </div>
  );
};

export default KanbanContainer;
