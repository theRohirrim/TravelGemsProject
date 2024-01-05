'use client';

import { AuthProvider } from "./Auth";

export const Providers = ({ children }) => {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}