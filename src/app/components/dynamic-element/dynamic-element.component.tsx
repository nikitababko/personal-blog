import React from 'react';
import type { DynamicElementProps } from '@/app/components/dynamic-element/dynamic-element.types';
import Image from 'next/image';
import { CodeSyntaxHighlighter } from '@/app/components/code-syntax-highlighter';
import { IconInfo } from '@/app/components/icons';
import parse from 'html-react-parser';
import clsx from 'clsx';
import styles from './dynamic-element.module.scss';

const selectedLanguage = 'en';

export const DynamicElement: React.FC<DynamicElementProps> = ({ fragment }) => {
  const renderElement = () => {
    const tagClassNames = clsx(
      styles[fragment.kind],
      fragment?.styleModifiers?.map((modifier) => styles[modifier]),
    );

    switch (fragment.kind) {
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6': {
        if (!fragment.text?.[selectedLanguage]) return null;

        const HeaderTag = fragment.kind;
        // const headerTagClassNames = clsx(
        //   styles[fragment.kind],
        //   fragment?.styleModifiers?.map((module_) => styles[module_]),
        // );

        return (
          <HeaderTag className={tagClassNames}>
            {parse(fragment.text?.[selectedLanguage])}
          </HeaderTag>
        );
      }
      case 'text': {
        if (!fragment.text?.[selectedLanguage]) return null;

        return <p className={tagClassNames}>{parse(fragment.text?.[selectedLanguage])}</p>;
      }
      case 'info': {
        if (!fragment.text?.[selectedLanguage]) return null;

        return (
          <div className={styles[fragment.kind]}>
            <IconInfo />

            <p>{parse(fragment.text?.[selectedLanguage])}</p>
          </div>
        );
      }
      case 'code': {
        if (!fragment.code?.[selectedLanguage]) return null;

        return <CodeSyntaxHighlighter code={fragment.code[selectedLanguage]} />;
      }
      case 'image': {
        if (!fragment.image?.src) return null;

        return (
          <Image
            className={tagClassNames}
            width={340}
            height={320}
            src={fragment.image?.src}
            alt={fragment.image?.alt || 'Image'}
          />
        );
      }
      case 'ul': {
        if (
          !fragment?.fragments &&
          !Array.isArray(fragment?.fragments) &&
          fragment?.fragments?.length > 0
        )
          return null;

        return (
          <ul className={tagClassNames}>
            {fragment.fragments.map((item) => (
              <DynamicElement key={item.id} fragment={item} />
            ))}
          </ul>
        );
      }
      case 'li': {
        if (!fragment.text?.[selectedLanguage]) return null;

        return <li className={tagClassNames}>{parse(fragment.text?.[selectedLanguage])}</li>;
      }
      case 'conclusion': {
        if (!fragment.text?.[selectedLanguage]) return null;

        return <p className={tagClassNames}>{parse(fragment.text?.[selectedLanguage])}</p>;
      }
      default: {
        if (!fragment.text?.[selectedLanguage]) return null;

        return <p className={styles.text}>{parse(fragment.text?.[selectedLanguage])}</p>;
      }
    }
  };

  return renderElement();
};
