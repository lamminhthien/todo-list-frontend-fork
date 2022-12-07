import {IInitialState} from './types';

export const isOpenModal = {
  deleteTask: false,
  deleteList: false,
  edit: false,
  list: false,
  settings: false,
  share: false,
  task: false
};

const initialState: IInitialState = {
  selectedTask: undefined,
  selectedTodolist: undefined,
  isOpenModal
};

export default initialState;
