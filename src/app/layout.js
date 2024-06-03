import './globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner';
import ParticlesComponent from './components/particles';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tofail Ahmed',
  description: 'Portfolio website by Tofail Ahmed',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Toaster toastOptions={{
        style:{
          border: "2px #4A044E solid",
          background:"#FFF",
          
          
        },
        classNames: {
          error: 'text-red-400',
          success: 'text-green-400 ',
          warning: 'text-yellow-400',
          info: 'bg-blue-400',
        },
      }} />
      <body className={inter.className}>
      <div className="-z-50" >
      {/* <ParticlesComponent id="particles" /> */}
      </div>
        <div className="z-50">
        {children}
        </div>
        </body>
    </html>
  )
}
