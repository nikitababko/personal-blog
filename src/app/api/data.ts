import type { PostType } from '@/app/shared/types/post-types';
import { TAGS } from '@/app/api/constants';

export const posts: PostType[] = [
  {
    id: '1',
    tags: [TAGS.JAVA_SCRIPT, TAGS.TYPE_SCRIPT],
    createdAt: '12-03-2023',
    fragments: [
      {
        id: 'someFragmentId',
        kind: 'h1',
        text: {
          en: 'My first article article article article',
          ru: 'Какой-то текст...',
        },
      },
      {
        id: 'someFragmentId',
        kind: 'h2',
        text: {
          en: 'h2 Lorem ipsum...',
          ru: 'Какой-то текст...',
        },
      },
      {
        id: 'someFragmentId',
        kind: 'h3',
        text: {
          en: 'h3 Lorem ipsum...',
          ru: 'Какой-то текст...',
        },
      },
      {
        id: 'someFragmentId',
        kind: 'h4',
        text: {
          en: 'h4 Lorem ipsum...',
          ru: 'Какой-то текст...',
        },
      },
      {
        id: 'someFragmentId',
        kind: 'h5',
        text: {
          en: 'h5 Lorem ipsum...',
          ru: 'Какой-то текст...',
        },
      },
      {
        id: 'someFragmentId',
        kind: 'h6',
        text: {
          en: 'h6 Lorem ipsum...',
          ru: 'Какой-то текст...',
        },
      },
      {
        id: 'someFragmentId',
        kind: 'info',
        text: {
          en: 'My first article article article article My first article article article article My first article article article article',
          ru: 'Какой-то текст...',
        },
      },
      {
        id: 'someFragmentId',
        kind: 'text',
        text: {
          en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
          ru: 'Какой-то текст...',
        },
      },
      {
        id: 'someFragmentId',
        kind: 'text',
        text: {
          en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
          ru: 'Какой-то текст...',
        },
      },
      {
        id: 'someFragmentId',
        kind: 'text',
        text: {
          en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
          ru: 'Какой-то текст...',
        },
      },
      {
        id: 'someFragmentId',
        kind: 'h2',
        text: {
          en: 'Lorem ipsum...',
          ru: 'Какой-то текст...',
        },
      },
      {
        id: 'someFragmentId',
        kind: 'text',
        text: {
          en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
          ru: 'Какой-то текст...',
        },
      },
      {
        id: 'someFragmentId',
        kind: 'image',
        image: {
          src: 'https://cdn.britannica.com/36/234736-050-4AC5B6D5/Scottish-fold-cat.jpg',
          alt: 'alt',
        },
      },
      {
        id: 'someFragmentId',
        kind: 'code',
        code: `for (let i = 0; i < quantity; i++) {
    let string = '';

    for (let j = 0; j < length; j++) {
        if (includeUpperCaseChars) {
            string += getRandomCharFromString(Alphabet.UpperChars);
        }
        if (includeLowerCaseChars) {
            string += getRandomCharFromString(Alphabet.LowerChars);
        }
        if (includeNumbers) {
            string += getRandomCharFromString(Alphabet.NumberChars);
        }
        if (includeSymbols) {
            string += getRandomCharFromString(Alphabet.SymbolChars);
        }
    }

    let password: string = getShuffledString(string.slice(FIRST_ELEMENT, length));

    if (dontStartingWithANumber) {
        if (RegExps.StartWithANumber.test(password.at(FIRST_ELEMENT) ?? '')) {
            password = getStringWithoutStartingWithANumber(password);
        }
    }

    if (dontStartingWithASymbol) {
        if (RegExps.StartWithASymbol.test(password.at(FIRST_ELEMENT) ?? '')) {
            password = getStringWithoutStartingWithASymbol(password);
        }
    }

    if (excludeSequentialChars) {
        password = getStringWithoutSequentialChars(password);
    }

    if (excludeSimilarChars) {
        password = getStringWithoutSimilarChars(password);
    }

    if (excludeAmbiguousChars) {
        password = getStringWithoutAmbiguousChars(password);
    }

    if (excludeDuplicatesChars) {
        password = getStringWithoutDuplicates(password);
    }

    passwordsArray.push(password);
}
        `,
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
        kind: 'h1',
        text: {
          en: 'My first article article article article',
          ru: 'Какой-то текст...',
        },
      },
      {
        id: 'someFragmentId',
        kind: 'h2',
        text: {
          en: 'Lorem ipsum...',
          ru: 'Какой-то текст...',
        },
      },
      {
        id: 'someFragmentId',
        kind: 'image',
        image: {
          src: 'https://...',
          alt: 'alt',
        },
      },
      {
        id: 'someFragmentId',
        kind: 'code',
        code: 's',
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
        kind: 'h1',
        text: {
          en: 'My first article article article article',
          ru: 'Какой-то текст...',
        },
      },
      {
        id: 'someFragmentId',
        kind: 'h2',
        text: {
          en: 'Lorem ipsum...',
          ru: 'Какой-то текст...',
        },
      },
      {
        id: 'someFragmentId',
        kind: 'image',
        image: {
          src: 'https://...',
          alt: 'alt',
        },
      },
      {
        id: 'someFragmentId',
        kind: 'code',
        code: 's',
      },
    ],
  },
];
