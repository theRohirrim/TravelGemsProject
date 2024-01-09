import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/header/Header'
import NavBar from '../components/navbar/NavBar'
import Provider from '@/Provider'

import { SessionProvider } from 'next-auth/react'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TravelGems',
  description: 'Find hidden gems near you',
}

export default function RootLayout({ children }) {
  return (
    <SessionProvider>
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <div className='max-w-full'>
            <Header />
            {children}
            <NavBar />
          </div>
        </Provider>
      </body>
    </html>
    </SessionProvider>
  )
}
