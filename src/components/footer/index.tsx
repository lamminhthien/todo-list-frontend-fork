import React from 'react';

import styles from './style.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="copyright">
          Copyright © 2022 by{' '}
          <a className="text-black" href="https://www.abcsoftwarecompany.com/" target="_blank" rel="noreferrer">
            ABC Software Solutions Company
          </a>
          .
        </div>
      </div>
    </footer>
  );
};

export default Footer;
