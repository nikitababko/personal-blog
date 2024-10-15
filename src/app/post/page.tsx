'use client';

import { useSearchParams } from 'next/navigation';
import { getData } from '@/app/helpers';
import { ENDPOINTS } from '@/app/constants';
import React, { useEffect, useState } from 'react';
import type { PostType } from '@/app/shared/types/post-types';
import { DynamicElement } from '@/app/components/dynamic-element';
import styles from './page.module.scss';

const PostPage = () => {
  const parameters = useSearchParams();
  const [post, setPost] = useState<PostType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // TODO: Add custom useQuery hook
  useEffect(() => {
    const response = getData<PostType>(`${ENDPOINTS.POSTS}/${parameters.get('id')}`);

    response
      .then((data) => {
        setPost(data?.data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [parameters]);

  // if (status >= 400) {
  //   // TODO: Add error component / redirect
  //   return <div>Something went wrong!</div>;
  // }

  if (isLoading) {
    // TODO: Add loading component
    return <div>Loading...</div>;
  }

  if (!post || Array.isArray(post)) {
    // TODO: Add no data component
    return <div>No data!</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {post?.fragments.map((fragment) => (
          <DynamicElement fragment={fragment} key={fragment.id} />
        ))}
      </div>
    </div>
  );
};

export default PostPage;
