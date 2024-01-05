import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/header/Header'
import NavBar from '../components/navbar/NavBar'
import { Providers } from '@/contexts/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TravelGems',
  description: 'Find hidden gems near you',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className='container'>
            <Header />
            {children}
            <NavBar />
          </div>
        </Providers>
      </body>
    </html>
  )
}
