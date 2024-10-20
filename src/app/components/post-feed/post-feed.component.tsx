import React from 'react';
import { getData } from '@/app/helpers';
import type { PostType } from '@/app/shared/types/post-types';
import { ENDPOINTS } from '@/app/constants';
import { Post } from '@/app/components/post';
import { NoData } from '@/app/components/no-data';
import styles from './post-feed.module.scss';

export const PostFeed: React.FC = async () => {
  const { data, status } = await getData<{ posts: PostType[] }>(ENDPOINTS.POSTS);
  if (status >= 400) {
    // TODO: Add error component / redirect
    return <div>Something went wrong!</div>;
  }

  if (!data || !data?.posts || data?.posts.length === 0) {
    return <NoData />;
  }

  return (
    <div className={styles.container}>
      {data?.posts?.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
};
