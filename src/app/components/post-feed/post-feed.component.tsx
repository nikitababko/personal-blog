import React from 'react';
import { getData } from '@/app/helpers';
import type { PostType } from '@/app/shared/types/post-types';
import { ENDPOINTS } from '@/app/constants';
import { Post } from '@/app/components';

export const PostFeed: React.FC = async () => {
  const { data, status } = await getData<{ posts: PostType[] }>(ENDPOINTS.POSTS);
  if (status >= 400) {
    // TODO: Add error component / redirect
    return <div>Something went wrong!</div>;
  }

  if (!data || !data?.posts || data?.posts.length === 0) {
    // TODO: Add no data component
    return <div>No data!</div>;
  }

  return <main>{data?.posts?.map((post) => <Post key={post.id} post={post} />)}</main>;
};
