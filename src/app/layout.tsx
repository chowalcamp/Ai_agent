import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Video AI',
  description: 'Video AI',
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