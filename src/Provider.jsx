'use client'

import { SessionProvider } from 'next-auth/react'
import { UserProvider } from './contexts/UserContext'

const Provider = ({ children, session }) => {
  return (
    <SessionProvider session={session}>
      <UserProvider>
        {children}
      </UserProvider>
    </SessionProvider>

  ) 
  
}

export default Provider