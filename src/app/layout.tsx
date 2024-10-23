import localFont from 'next/font/local';
import './styles/global.scss';

const openSansRegular = localFont({
  src: './fonts/OpenSans-Regular.woff2',
  variable: '--open-sans-regular',
  weight: '400',
});

const openSansMedium = localFont({
  src: './fonts/OpenSans-Medium.woff2',
  variable: '--open-sans-medium',
  weight: '500',
});

const openSansBold = localFont({
  src: './fonts/OpenSans-Bold.woff2',
  variable: '--open-sans-bold',
  weight: '700',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSansRegular.variable} ${openSansMedium.variable} ${openSansBold.variable}`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
