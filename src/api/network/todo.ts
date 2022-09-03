import * as HttpRequest from '@/api/http-request';
import {IAxiosResponse} from '@/types';

export interface ITodo {
  id?: string;
  name: string;
  createdAt?: string;
  updatedAt?: string;
}

type List = IAxiosResponse<ITodo>;
type Lists = IAxiosResponse<ITodo[]>;

const getTodos = () => HttpRequest.get<Lists>('/todos');
const getTodo = (id: string) => HttpRequest.get<List>(`todos/${id}`);
const createTodo = (data: ITodo) => HttpRequest.post<ITodo>('/todos', data);
const updateTodo = (id: string, data: ITodo) => HttpRequest.patch<ITodo>(`/todos/${id}`, data);
const deleteTodo = (id: string) => HttpRequest.destroy<ITodo>(`todos/${id}`);

export default {getTodos, getTodo, createTodo, updateTodo, deleteTodo};
