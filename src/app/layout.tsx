import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './styles/global.scss';

const openSansRegular = localFont({
  src: './fonts/OpenSans-Regular.woff2',
  variable: '--open-sans-regular',
  weight: '400',
});

const openSansBold = localFont({
  src: './fonts/OpenSans-Bold.woff2',
  variable: '--open-sans-bold',
  weight: '500',
});

export const metadata: Metadata = {
  title: 'Personal blog',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSansRegular.variable} ${openSansBold.variable}`}>
        {children}
      </body>
    </html>
  );
}
