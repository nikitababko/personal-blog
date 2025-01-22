import React from 'react';
import { getData } from '@/app/helpers';
import type { PostType } from '@/app/shared/types/post-types';
import { ENDPOINTS } from '@/app/shared/constants';
import { Post } from '@/app/components/post';
import { NoData } from '@/app/components/no-data';
import styles from './post-feed.module.scss';

export const PostFeed: React.FC = async () => {
  const { data: posts, status } = await getData<PostType[]>(`${ENDPOINTS.POSTS}`);

  if (status >= 500) {
    // TODO: Add error component / redirect
    return <div>Something went wrong!</div>;
  }

  if (!posts || !posts || posts.length === 0) {
    return <NoData />;
  }

  return (
    <div className={styles.container}>
      {posts?.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
};
