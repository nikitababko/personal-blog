import React from 'react';
import type { DynamicElementProps } from '@/app/components/dynamic-element/dynamic-element.types';
import Image from 'next/image';
import { CodeSyntaxHighlighter } from '@/app/components/code-syntax-highlighter';
import { IconInfo } from '@/app/components/icons';
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

        return <HeaderTag className={styles[fragment.kind]}>{fragment.text?.en}</HeaderTag>;
      }
      case 'text': {
        if (!fragment.text?.en) return null;

        return <p className={styles[fragment.kind]}>{fragment.text?.en}</p>;
      }
      case 'info': {
        if (!fragment.text?.en) return null;

        return (
          <div className={styles[fragment.kind]}>
            <IconInfo />

            <p>{fragment.text?.en}</p>
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
      default: {
        if (!fragment.text?.en) return null;

        return <div className={styles.text}>{fragment.text?.en}</div>;
      }
    }
  };

  return renderElement();
};
