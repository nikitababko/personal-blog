import React from 'react';
import Link from 'next/link';
import type { PostProps } from '@/app/components/post/post.types';
import styles from './post.module.scss';

export const Post: React.FC<PostProps> = ({ post }) => (
  <Link className={styles.container} href="/post">
    <h2 className={styles.title}>{post.fragments?.[0].text?.en}</h2>

    <div className={styles.tags}>
      {post.tags.map((tag) => (
        <div key={tag} className={styles['tag-container']}>
          <div className={`${styles['tag-dot']} ${styles[`tag-dot_${tag}`]}`} />

          <p className={styles['tag-label']}>{tag}</p>
        </div>
      ))}
    </div>
  </Link>
);
