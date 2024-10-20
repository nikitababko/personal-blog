import React from 'react';
import { IconEmpty } from '@/app/components/icons';
import styles from './no-data.module.scss';

export const NoData: React.FC = () => (
  <div className={styles.container}>
    <IconEmpty />

    {/* TODO: add translation */}
    <p className={styles.text}>No data</p>
  </div>
);
