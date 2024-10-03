import { Suspense } from 'react';
import { PostFeed } from '@/app/components/post-feed';

export default async function Home() {
  return (
    <div>
      {/* TODO: Add loader component */}
      <Suspense fallback={<div>Loading...</div>}>
        <PostFeed />
      </Suspense>
    </div>
  );
}
