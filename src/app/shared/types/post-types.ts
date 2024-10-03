import type { TAGS } from '@/app/api/constants';
import type { ValueOf } from 'next/constants';

export type PostFragmentKindType = 'title' | 'subTitle' | 'image' | 'code';

export type PostFragmentType = {
  id: string;
  kind: PostFragmentKindType;
  text?: {
    en: string;
    ru: string;
  };
  link?: string;
  value?: string;
};

export type PostType = {
  id: string;
  tags: ValueOf<typeof TAGS>[];
  createdAt: string;
  fragments: PostFragmentType[];
};
