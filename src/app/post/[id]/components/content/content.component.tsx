import React from 'react';
import type { PostPageProps } from '@/app/post/[id]/page.types';
import { getData } from '@/app/helpers';
import type { PostType } from '@/app/shared/types/post-types';
import { ENDPOINTS, TITLE_KINDS } from '@/app/shared/constants';
import { DynamicElement, NoData } from '@/app/components';
import styles from '@/app/post/[id]/page.module.scss';
import dynamicElementStyles from '@/app/components/dynamic-element/dynamic-element.module.scss';
import { Footer } from '@/app/post/[id]/components/footer';
import Link from 'next/link';

export const Content: React.FC<PostPageProps> = async ({ params }) => {
  const { data, status } = await getData<PostType>(`${ENDPOINTS.POSTS}/${params.id}`);

  if (status >= 500) {
    // TODO: Add error component / redirect
    return <div>Something went wrong!</div>;
  }

  if (!data || Array.isArray(data)) {
    return <NoData />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={dynamicElementStyles.h1}>{data.title.en}</h1>

        {data?.fragments.map((fragment) => {
          if (Object.keys(TITLE_KINDS).includes(fragment.kind)) {
            return (
              <Link
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}
                key={fragment.id}
                id={fragment.id}
                href={`/post/${params.id}#${fragment.id}`}
              >
                <DynamicElement fragment={fragment} />
              </Link>
            );
          }
          return <DynamicElement key={fragment.id} fragment={fragment} />;
        })}

        <Footer post={data} />
      </div>
    </div>
  );
};
