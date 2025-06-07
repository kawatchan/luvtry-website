import type { Metadata } from 'next';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import '@/styles/global.css';

export const metadata: Metadata = {
  icons: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      url: '/logo.svg', // favicon
    }
  ],
};

export function generateStaticParams() {
  return [{ locale: 'zh' }]; // 只用中文可简化，支持多语言再扩展
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;

  if (!hasLocale(['zh'], locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          {props.children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
