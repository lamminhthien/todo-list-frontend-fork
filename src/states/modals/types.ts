import {ITaskResponse} from '@/data/api/types/task.type';
import {ITodolistResponse} from '@/data/api/types/todolist.type';

import {isOpenModal} from './initialState';

export type ISetIsOpenModalPayload = keyof typeof isOpenModal | null;

export interface IInitialState {
  selectedTask?: ITaskResponse;
  selectedTodolist?: ITodolistResponse;
  isOpenModal: {
    deleteTask: boolean;
    deleteList: boolean;
    edit: boolean;
    list: boolean;
    settings: boolean;
    share: boolean;
    task: boolean;
  };
}
