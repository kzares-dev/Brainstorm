import type { Metadata } from 'next'
import '../globals.css'
import { Toaster } from "@/components/ui/sonner"

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
      <body className='lg:py-[10rem] container scrollbar-hide'>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
