import {useDispatch, useSelector} from 'react-redux';

import {IKanbanColumn} from '@/states/kanban/types';
import {kanbanSlice, RootState} from '@/states/store';

export default function useKanban() {
  const {columns} = useSelector((state: RootState) => state.kanban);
  const dispatch = useDispatch();
  const setColumns = (param: IKanbanColumn[]) => dispatch(kanbanSlice.actions.setColumns(param));
  return {columns, setColumns};
}
