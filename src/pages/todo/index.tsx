import {GetStaticProps} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {useRouter} from 'next/router';
import React, {useEffect, useState} from 'react';

import API, {ITodo} from '@/api/network/todo';
import ModalTodoAddEdit from '@/components/modal-todo-add-edit';
import ModalTodoConfirmDelete from '@/components/modal-todo-confirm-delete';
import {ROUTES} from '@/configs/routes.config';
import Button from '@/core-ui/button';
import Icon from '@/core-ui/icon';
import LayoutDefault from '@/layouts/default';
import {IAction} from '@/types';

import styles from './style.module.scss';

export default function List() {
  const router = useRouter();
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [action, setAction] = useState<IAction>({type: '', payload: null});

  const getTodos = () => API.getTodos().then(res => setTodos(res.data));

  const resetAction = () => setAction({type: '', payload: null});

  const reset = () => {
    getTodos();
    resetAction();
  };

  useEffect(() => {
    getTodos();
  }, []);

  if (!todos) return null;

  return (
    <div className={styles['create-list-section']}>
      <div className="container">
        <div className="banner-list">
          <div className="list-user">
            <Icon name="ico-user" />
            <h4 className="title-user">{'Tin'}</h4>
          </div>
          <div className="list-content">
            <div className="list-left">
              <div className="icon-arrow-left" onClick={() => router.push(ROUTES.ACTION)}>
                <Icon size={28} name="ico-arrow-left-circle" />
              </div>
              <div className="title-left">
                <h3 className="title-todo">TO DO</h3>
                <h3 className="title-todo">YOUR LIST</h3>
              </div>
            </div>
            <Button
              variant="contained"
              className="list-right"
              startIcon={<Icon name="ico-plus-circle" size={28} />}
              onClick={() => setAction({type: 'add', payload: null})}
            >
              <h3 className="title-right">New List</h3>
            </Button>
          </div>
        </div>
        <div className="list-group">
          {!todos.length && <span>Empty list</span>}
          {todos.map(item => (
            <div className="text-group" key={item.id}>
              <p className="title-group">{item.name}</p>
              <div className="actions">
                <Button text="ico-edit" onClick={() => setAction({type: 'edit', payload: item})} />
                <Button text="ico-trash" onClick={() => setAction({type: 'delete', payload: item})} />
                <Button text="ico-share" onClick={() => {}} />
                <Button text="ico-arrow-right" onClick={() => router.push(`${ROUTES.TODO}/${item.id}`)} />
              </div>
            </div>
          ))}
        </div>
      </div>
      {['add', 'edit'].includes(action.type) && (
        <ModalTodoAddEdit data={action.payload} open={true} onSave={reset} onCancel={resetAction} />
      )}
      {['delete'].includes(action.type) && (
        <ModalTodoConfirmDelete open={true} data={action.payload} onConfirm={reset} onCancel={resetAction} />
      )}
    </div>
  );
}

List.Layout = LayoutDefault;

export const getStaticProps: GetStaticProps = async ({locale}) => {
  const translate = await serverSideTranslations(locale!, ['common']);

  return {
    props: {
      ...translate
    }
  };
};
