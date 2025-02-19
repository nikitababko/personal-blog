import type { ValueOf } from 'next/constants';
import type { POST_KINDS, TAGS } from '@/app/shared/constants';

export type PostFragmentType = {
  id: string;
  kind: keyof typeof POST_KINDS;
  styleModifiers: ('underline' | 'strong')[];
  text?: {
    en: string;
    ru: string;
  };
  image?: {
    src: string;
    alt: string;
  };
  code?: {
    en: string;
    ru: string;
  };
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
