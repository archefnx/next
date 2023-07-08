import './globals.css'
import { Inter } from 'next/font/google'
import {TheHeader} from "@/components/TheHeader";
import {TheFooter} from "@/components/TheFooter";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'next_one',
  description: 'test desc',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <TheHeader />
      <main className="container">{children}</main>
      <TheFooter />
      </body>
    </html>
  )
}
