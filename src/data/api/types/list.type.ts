import {VisibilityTypes} from '@/utils/constant';

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
  visibility?: keyof typeof VisibilityTypes;
}

export interface IStatus {
  id: number;
  name: string;
  color: string;
  index: number;
}
export interface IListResponse extends IListGetOne, IListCreate {
  userId: string;
  isActive: boolean;
  status: IStatus[];
  tasks: ITaskResponse[];
  visibility: keyof typeof VisibilityTypes;
}
