import React from 'react';
import type { DynamicElementProps } from '@/app/components/dynamic-element/dynamic-element.types';
import Image from 'next/image';
import { CodeSyntaxHighlighter } from '@/app/components/code-syntax-highlighter';
import { IconInfo } from '@/app/components/icons';
import parse from 'html-react-parser';
import styles from './dynamic-element.module.scss';

export const DynamicElement: React.FC<DynamicElementProps> = ({ fragment }) => {
  const renderElement = () => {
    switch (fragment.kind) {
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6': {
        if (!fragment.text?.en) return null;

        const HeaderTag = fragment.kind;

        return (
          <HeaderTag className={styles[fragment.kind]}>{parse(fragment.text?.en)}</HeaderTag>
        );
      }
      case 'text': {
        if (!fragment.text?.en) return null;

        return <p className={styles[fragment.kind]}>{parse(fragment.text?.en)}</p>;
      }
      case 'info': {
        if (!fragment.text?.en) return null;

        return (
          <div className={styles[fragment.kind]}>
            <IconInfo />

            <p>{parse(fragment.text?.en)}</p>
          </div>
        );
      }
      case 'code': {
        if (!fragment.code) return null;

        return <CodeSyntaxHighlighter code={fragment.code} />;
      }
      case 'image': {
        if (!fragment.image?.src) return null;

        return (
          <Image
            className={styles[fragment.kind]}
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
          <ul className={styles[fragment.kind]}>
            {fragment.fragments.map((item) => (
              <DynamicElement key={item.id} fragment={item} />
            ))}
          </ul>
        );
      }
      case 'li': {
        if (!fragment.text?.en) return null;

        return <li className={styles[fragment.kind]}>{parse(fragment.text?.en)}</li>;
      }
      case 'summary': {
        if (!fragment.text?.en) return null;

        return <p className={styles[fragment.kind]}>{parse(fragment.text?.en)}</p>;
      }
      default: {
        if (!fragment.text?.en) return null;

        return <p className={styles.text}>{parse(fragment.text?.en)}</p>;
      }
    }
  };

  return renderElement();
};
