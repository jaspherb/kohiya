import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'kohiya',
  description: 'Discover the best coffee and experience the charm of Kohiya.'
};

type RootLayoutProps = {
  children: React.ReactNode;
};

import { ThemeProvider } from '@/components/theme-provider';
import { AppBar } from '@/components/app-bar';

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body className="bg-white dark:bg-black text-black dark:text-white">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="max-h-screen flex flex-col">
              <header className="fixed top-0 left-0 right-0 z-50 p-3  bg-white dark:bg-black text-black dark:text-white">
                <AppBar />
              </header>
              <main className="container mx-auto p-6 pt-16">{children}</main>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
