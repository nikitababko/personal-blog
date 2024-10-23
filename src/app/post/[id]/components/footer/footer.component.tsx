'use client';

import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { IconFacebook, IconLinkedIn, IconReddit, IconX } from '@/app/components';
import type { FooterProps } from '@/app/post/[id]/components/footer/footer.types';
import styles from './footer.module.scss';

export const Footer: React.FC<FooterProps> = ({ post }) => {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const shareData = [
    {
      id: 'twitter',
      title: 'Tweet',
      icon: <IconX />,
      href: `https://x.com/intent/tweet?text=${currentUrl}`,
      styles: styles.shareBtnTwitter,
    },
    {
      id: 'facebook',
      title: 'Share',
      icon: <IconFacebook />,
      href: `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`,
      styles: styles.shareBtnFacebook,
    },
    {
      id: 'linkedIn',
      title: 'Share',
      icon: <IconLinkedIn />,
      href: `https://www.linkedin.com/cws/share?url=${currentUrl}`,
      styles: styles.shareBtnLinkedin,
    },
    {
      id: 'reddit',
      title: 'Share',
      icon: <IconReddit />,
      href: `https://www.reddit.com/submit?url=${currentUrl}&title=${post?.fragments[0].text?.en}`,
      styles: styles.shareBtnReddit,
    },
  ];

  return (
    <footer>
      <ul className={styles.socialShareContainer}>
        {shareData.map((shareItem) => (
          <li key={shareItem.id}>
            <a
              className={clsx(styles.shareBtn, shareItem.styles)}
              href={shareItem.href}
              rel="nofollow noreferrer"
              target="_blank"
            >
              {shareItem.icon}

              {shareItem.title}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};
