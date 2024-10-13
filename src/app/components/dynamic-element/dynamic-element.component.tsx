import React, { useMemo } from 'react';
import type { DynamicElementProps } from '@/app/components/dynamic-element/dynamic-element.types';
import Image from 'next/image';
import styles from './dynamic-element.module.scss';

export const DynamicElement: React.FC<DynamicElementProps> = ({ kind, children, image }) => {
  const Element = useMemo(() => {
    switch (kind) {
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5': {
        return kind;
      }
      case 'text': {
        return 'p';
      }
      case 'code': {
        return 'code';
      }
      case 'image': {
        return 'img';
      }
      default: {
        return 'div';
      }
    }
  }, [kind]);

  if (kind === 'image') {
    return (
      <Image
        className={styles[kind]}
        width={340}
        height={320}
        src={image?.src || ''}
        alt={image?.alt || ''}
      />
    );
  }

  return <Element className={styles[kind]}>{children}</Element>;
};
