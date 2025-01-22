import React, { Suspense } from 'react';
import { getData } from '@/app/helpers';
import type { PostType } from '@/app/shared/types/post-types';
import { ENDPOINTS, PROJECT_INFO } from '@/app/shared/constants';
import { Loader } from '@/app/components';
import type { PostPageProps } from '@/app/post/[id]/page.types';
import { Content } from './components/content';

export async function generateMetadata({ params }: PostPageProps) {
  const { data } = await getData<PostType>(`${ENDPOINTS.POSTS}/${params.id}`);

  if (data && !Array.isArray(data)) {
    return {
      title: data.title.en,
      // description: data?.description.en,
      keywords: data.tags,
      robots: {
        index: true,
        follow: true,
      },
      creator: `${PROJECT_INFO.AUTHOR.NAME}, ${PROJECT_INFO.AUTHOR.EMAIL}`,
      authors: [
        {
          name: `${PROJECT_INFO.AUTHOR.NAME}, ${PROJECT_INFO.AUTHOR.EMAIL}`,
        },
      ],
      openGraph: {
        type: 'article',
        title: data.title.en,
        description: data?.description?.en,
        // images: ['/assets/avatar.png'], // TODO: add post image
        emails: [PROJECT_INFO.AUTHOR.EMAIL],
      },
    };
  }

  return {};
}

const PostPage: React.FC<PostPageProps> = ({ params }) => (
  <Suspense fallback={<Loader />}>
    <Content params={params} />
  </Suspense>
);

export default PostPage;
