import React from 'react';
import {useRouter} from 'next/router';

import styles from './style.module.scss';
import TodoListLogo from '../../components/icons/todolist-logo';
import Button from '@/core-ui/button';

const QuickPlay: React.FC = () => {
  const router = useRouter();

  return (
    <div className={styles['section-todo-list']}>
      <div className="container">
        <div className="inner">
          <div className="logo-wrapper">
            <TodoListLogo />
          </div>
          <div className="enter-your-name">
            <h2 className="heading">Let's start !</h2>
            <input className="input" type="text" placeholder="Enter your name" />
            <Button className="btn-enter" text="Enter" onClick={() => router.push('/action')} />
          </div>
          <div className="copyright">Copyright © 2022 By ABC Software Solutions Company.</div>
        </div>
      </div>
    </div>
  );
};

export default QuickPlay;
