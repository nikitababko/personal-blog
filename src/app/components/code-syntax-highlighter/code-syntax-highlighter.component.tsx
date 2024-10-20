import React, { useEffect, useState } from 'react';
import { Prism } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import clsx from 'clsx';
import { IconCopy } from '@/app/components/icons';
import type { CodeSyntaxHighlighterProps } from './code-syntax-highlighter.types';
import styles from './code-syntax-highlighter.module.scss';

export const CodeSyntaxHighlighter: React.FC<CodeSyntaxHighlighterProps> = ({ code }) => {
  const [isVisibleTooltip, setIsVisibleTooltip] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(code).then(() => {
      setIsVisibleTooltip(true);
    });
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isVisibleTooltip) {
      timeoutId = setTimeout(() => {
        setIsVisibleTooltip(false);
      }, 2000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isVisibleTooltip]);

  return (
    <div className={styles.container}>
      <div className={styles.copyContent}>
        <div
          className={clsx(styles.copyTooltip, {
            [styles.copyTooltipVisible]: isVisibleTooltip,
          })}
        >
          {/* TODO: add translation */}
          Copied
        </div>

        <button
          aria-label="Copy to clipboard"
          title="Copy to clipboard"
          className={clsx(styles.copyButton, { [styles.copyButtonVisible]: isVisibleTooltip })}
          onClick={handleCopyClick}
        >
          <IconCopy />
        </button>
      </div>

      <Prism language="javascript" style={oneDark} showLineNumbers>
        {code}
      </Prism>
    </div>
  );
};
