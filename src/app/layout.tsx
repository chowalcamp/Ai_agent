import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PopcornAI - Video AI, Search and Recommend ',
  description: 'PopcornAI - Video AI, Search and Recommend : PopcornAI is an AI-powered video recommendation platform that uses blockchain technology to deliver personalized content and rewards.',
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