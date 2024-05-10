import './globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Toaster toastOptions={{
        style:{
          border: "2px #4A044E solid",
          background:"#A855F7",
          
          
        },
        classNames: {
          error: 'bg-red-400',
          success: 'text-green-400',
          warning: 'text-yellow-400',
          info: 'bg-blue-400',
        },
      }} />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
