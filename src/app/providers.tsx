'use client'

import { ThemeProvider } from 'next-themes'

/**
 * Adds the Dark Theme to the website across all pages.
 *
 * @param {React.ReactNode} children - The children elements to be wrapped by the ThemeProvider.
 * @return {React.ReactNode} The ThemeProvider component with the specified attributes.
 */
export function Providers({ children }: { children: React.ReactNode }): React.ReactNode {
    return <ThemeProvider attribute="class" defaultTheme='system' enableSystem>{children}</ThemeProvider>
}