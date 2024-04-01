import type { Metadata } from 'next'
import '../globals.css'
import Hero from '@/components/sections/Hero'
import MainContent from '@/components/sections/MainContent'


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
      <body className='py-[10rem] container'>
        <Hero />
        <MainContent>
          {children}
        </MainContent>


      </body>
    </html>
  )
}
