/* eslint-disable @typescript-eslint/no-unused-vars */
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {ITaskResponse, ITaskUpdate} from '@/data/api/types/task.type';

export type IAction = PayloadAction<{id: string}>;

export interface IInitialState {
  task: {
    loading: boolean;
    error: null;
    data?: ITaskResponse;
    isDelecting?: boolean;
  };
}

export const initialState: IInitialState = {
  task: {
    loading: false,
    error: null
  }
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    getTaskRequest: (state, {payload}: IAction) => {
      state.task.loading = true;
    },
    getTaskSuccess: (state, {payload}) => {
      state.task.loading = false;
      state.task.data = payload;
    },
    getTaskFailure: (state, {payload}) => {
      state.task.loading = false;
      state.task.error = payload;
    },
    // DESTROY
    destroyRequest: (state, action: PayloadAction<ITaskUpdate>) => {
      state.task.isDelecting = true;
    },
    destroySuccess: state => {
      state.task.isDelecting = false;
      state.task.data = undefined;
    },
    destroyFailure: (state, {payload}: PayloadAction<any>) => {
      state.task.isDelecting = false;
      state.task.data = undefined;
      state.task.error = payload;
    },
    // MISCS
    resetCrudState: state => {
      state.task.isDelecting = undefined;
    }
  }
});

export default taskSlice;
