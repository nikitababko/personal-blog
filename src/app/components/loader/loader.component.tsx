import React from 'react';
import styles from './loader.module.scss';

export const Loader: React.FC = () => (
  <div className={styles.container} role="status" aria-live="polite" aria-busy="true">
    {/* TODO: add translation */}
    <span className={styles.visuallyHidden}>Loading...</span>
  </div>
);
