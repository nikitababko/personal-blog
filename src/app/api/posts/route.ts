import { NextResponse } from 'next/server';
import { TAGS } from '@/app/api/constants';
import type { PostType } from '@/app/shared/types/post-types';

const posts: PostType[] = [
  {
    id: 'somePostId',
    tags: [TAGS.JAVA_SCRIPT, TAGS.TYPE_SCRIPT],
    createdAt: '12-03-2023',
    fragments: [
      {
        id: 'someFragmentId',
        kind: 'title',
        text: {
          en: 'My first article article article article',
          ru: 'Какой-то текст...',
        },
      },
      {
        id: 'someFragmentId',
        kind: 'subTitle',
        text: {
          en: 'Lorem ipsum...',
          ru: 'Какой-то текст...',
        },
      },
      {
        id: 'someFragmentId',
        kind: 'image',
        link: 'https://...',
      },
      {
        id: 'someFragmentId',
        kind: 'code',
        value: 's',
      },
    ],
  },
  {
    id: 'somePostId',
    tags: [TAGS.JAVA_SCRIPT, TAGS.TYPE_SCRIPT],
    createdAt: '12-03-2023',
    fragments: [
      {
        id: 'someFragmentId',
        kind: 'title',
        text: {
          en: 'My first article article article article',
          ru: 'Какой-то текст...',
        },
      },
      {
        id: 'someFragmentId',
        kind: 'subTitle',
        text: {
          en: 'Lorem ipsum...',
          ru: 'Какой-то текст...',
        },
      },
      {
        id: 'someFragmentId',
        kind: 'image',
        link: 'https://...',
      },
      {
        id: 'someFragmentId',
        kind: 'code',
        value: 's',
      },
    ],
  },
  {
    id: 'somePostId',
    tags: [TAGS.JAVA_SCRIPT, TAGS.TYPE_SCRIPT],
    createdAt: '12-03-2023',
    fragments: [
      {
        id: 'someFragmentId',
        kind: 'title',
        text: {
          en: 'My first article article article article',
          ru: 'Какой-то текст...',
        },
      },
      {
        id: 'someFragmentId',
        kind: 'subTitle',
        text: {
          en: 'Lorem ipsum...',
          ru: 'Какой-то текст...',
        },
      },
      {
        id: 'someFragmentId',
        kind: 'image',
        link: 'https://...',
      },
      {
        id: 'someFragmentId',
        kind: 'code',
        value: 's',
      },
    ],
  },
];

export async function GET() {
  return NextResponse.json({
    posts,
  });
}
