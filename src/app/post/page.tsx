'use client';

import { useSearchParams } from 'next/navigation';
import { ENDPOINTS } from '@/app/constants';
import React from 'react';
import type { PostType } from '@/app/shared/types/post-types';
import { DynamicElement } from '@/app/components/dynamic-element';
import { useQuery } from '@/app/hooks';
import { Loader } from '@/app/components/loader';
import { NoData } from '@/app/components/no-data';
import styles from './page.module.scss';

const PostPage = () => {
  const parameters = useSearchParams();

  const { data: post, isLoading } = useQuery<PostType>(
    `${ENDPOINTS.POSTS}/${parameters.get('id')}`,
  );

  // if (status >= 400) {
  //   // TODO: Add error component / redirect
  //   return <div>Something went wrong!</div>;
  // }

  if (isLoading) {
    return <Loader />;
  }

  if (!post || Array.isArray(post)) {
    return <NoData />;
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
