import type { Metadata } from 'next'
import '../globals.css'


export const metadata: Metadata = {
  title: 'Brainstorm',
  description: 'Get Ideas for your next project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='py-[10rem]'>{children}</body>
    </html>
  )
}
