import './globals.css'
import type { Metadata } from 'next'
import Header from '@/Components/Header'
import { ToastContainer} from './wrapper';
import 'react-toastify/dist/ReactToastify.css';
import { Suspense } from "react";

export const metadata: Metadata = {
  title: 'Giphy App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Header/>
        <ToastContainer/>
        {children}
        </body>
    </html>
  )
}
