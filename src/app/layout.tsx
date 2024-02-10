import type { Metadata } from 'next'
import { Noto_Sans_Georgian } from "@next/font/google";
import './globals.css'
import Providers from './providers';

const gergian = Noto_Sans_Georgian({ subsets: ['georgian'] })

export const metadata: Metadata = {
 description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='light'>
      <body className={gergian.className}>
        <Providers>
           {children}
        </Providers>
       </body>
    </html>
  )
}
