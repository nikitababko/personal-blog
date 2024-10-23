import type { TAGS } from '@/app/api/constants';
import type { ValueOf } from 'next/constants';

export type PostFragmentKindType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'text'
  | 'info'
  | 'image'
  | 'code';

export type PostFragmentType = {
  id: string;
  kind: PostFragmentKindType;
  text?: {
    en: string;
    ru: string;
  };
  image?: {
    src: string;
    alt: string;
  };
  code?: string;
};

export type PostType = {
  id: string;
  tags: ValueOf<typeof TAGS>[];
  createdAt: string;
  title: {
    en: string;
    ru: string;
  };
  description: {
    en: string;
    ru: string;
  };
  fragments: PostFragmentType[];
};
