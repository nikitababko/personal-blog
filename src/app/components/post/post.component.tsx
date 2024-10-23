import React from 'react';
import Link from 'next/link';
import type { PostProps } from '@/app/components/post/post.types';
import styles from './post.module.scss';

export const Post: React.FC<PostProps> = ({ post }) => (
  <Link className={styles.container} href={`/post/${post.id}`}>
    <h2 className={styles.title}>{post.title.en}</h2>

    <div className={styles.tags}>
      {post.tags.map((tag) => (
        <div key={tag} className={styles.tagContainer}>
          <div className={`${styles.tagDot} ${styles[`tagDot${tag}`]}`} />

          <p className={styles.tagLabel}>{tag}</p>
        </div>
      ))}
    </div>
  </Link>
);
