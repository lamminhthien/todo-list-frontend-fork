import {ITaskResponse} from './task.type';

export interface IListGetOne {
  id: string;
}

export interface IListCreate {
  name: string;
}

export interface IListUpdate extends IListGetOne {
  name?: string;
  isActive?: boolean;
}

export interface IStatus {
  id: number;
  name: string;
}
export interface IListResponse extends IListGetOne, IListCreate {
  userId: string;
  isActive: boolean;
  status: IStatus[];
  tasks: ITaskResponse[];
}
