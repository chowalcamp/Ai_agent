import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '스트리밍 서비스 클론',
  description: '스트리밍 서비스 클론 페이지',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" style={{ margin: 0, padding: 0, height: '100%' }}>
      <body style={{ margin: 0, padding: 0, height: '100%' }}>{children}</body>
    </html>
  )
}