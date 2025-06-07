// 文件：src/app/[locale]/layout.tsx
import { ReactNode } from 'react'
import { BaseTemplate } from '@/components/BaseTemplate'

interface LayoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}

export default function LocaleLayout({
  children,
  params,
}: LayoutProps): JSX.Element {
  return (
    <html lang={params.locale}>
      <body>
        {/* leftNav 和 rightNav 这里都传 null，就不会渲染任何导航 */}
        <BaseTemplate leftNav={null} rightNav={null}>
          {children}
        </BaseTemplate>
      </body>
    </html>
  )
}
