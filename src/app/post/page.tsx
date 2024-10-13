'use client';

import { useSearchParams } from 'next/navigation';
import { getData } from '@/app/helpers';
import { ENDPOINTS } from '@/app/constants';
import { useEffect, useState } from 'react';
import type { PostType } from '@/app/shared/types/post-types';
import { DynamicElement } from '@/app/components/dynamic-element';
import styles from './page.module.scss';

const PostPage = () => {
  const parameters = useSearchParams();
  const [post, setPost] = useState<PostType | null>(null);

  // TODO: Add custom useQuery hook
  useEffect(() => {
    const response = getData<PostType>(`${ENDPOINTS.POSTS}/${parameters.get('id')}`);

    response.then((data) => {
      setPost(data?.data);
    });
  }, [parameters]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {post?.fragments.map((fragment) => (
          <DynamicElement kind={fragment.kind} key={fragment.id} image={fragment.image}>
            {fragment.code || fragment.text?.en}
          </DynamicElement>
        ))}
      </div>
    </div>
  );
};

export default PostPage;
