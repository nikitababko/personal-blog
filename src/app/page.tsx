import { Suspense } from 'react';
import { PostFeed } from '@/app/components/post-feed';
import { Loader } from '@/app/components/loader';

export default async function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <PostFeed />
    </Suspense>
  );
}
