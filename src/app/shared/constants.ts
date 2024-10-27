export const ENDPOINTS = {
  POSTS: 'posts',
} as const;

export const PROJECT_INFO = {
  AUTHOR: {
    NAME: 'Nikita Babko',
    EMAIL: 'niki.babko@gmail.com',
  },
  TITLE: 'Personal blog',
  DESCRIPTION:
    'Learn all about JavaScript, TypeScript, and web development! Practical tips, best practices, and breakdowns of complex technical topics for beginners and professionals.',
} as const;

export const TITLE_KINDS = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
} as const;

export const POST_KINDS = {
  ...TITLE_KINDS,
  text: 'text',
  info: 'info',
  image: 'image',
  code: 'code',
} as const;
