import type React from 'react';
import type { PostFragmentType } from '@/app/shared/types/post-types';

export type DynamicElementProps = {
  kind: PostFragmentType['kind'];
  image: PostFragmentType['image'];
  children?: React.ReactNode;
};
