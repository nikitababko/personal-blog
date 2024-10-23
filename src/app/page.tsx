import { Suspense } from 'react';
import { PostFeed } from '@/app/components/post-feed';
import { Loader } from '@/app/components/loader';
import type { Metadata } from 'next';
import { PROJECT_INFO } from '@/app/shared/constants';

export const metadata: Metadata = {
  title: PROJECT_INFO.TITLE,
  description: PROJECT_INFO.DESCRIPTION,
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
    type: 'website',
    title: PROJECT_INFO.TITLE,
    description: PROJECT_INFO.DESCRIPTION,
    images: ['/project-image.png'],
    emails: [PROJECT_INFO.AUTHOR.EMAIL],
  },
  keywords: [
    'JavaScript',
    'Web',
    'Web Development',
    'Frontend',
    'Frontend Development',
    'Programming Blog',
  ],
};

export default async function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <PostFeed />
    </Suspense>
  );
}
