import React from 'react';

import styles from './style.module.scss';

const EnterYourName: React.FC = () => {
  return (
    <div className={styles['form-enter-your-name-components']}>
      <h2 className="heading">Let's start !</h2>
      <input className="input" type="text" placeholder="Enter your name" />
      <button className="btn-enter" type="button">
        Enter
      </button>
    </div>
  );
};

export default EnterYourName;
