import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "kohiya",
  description: "Discover the best coffee and experience the charm of Kohiya.",
};

type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    storeCuid: string;
  };
};

import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({ children, params }: RootLayoutProps) {
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
              <main className="container mx-auto p-6 pt-16">{children}</main>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
