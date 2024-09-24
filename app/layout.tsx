import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css?v=1.0.1";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nutan's Web Portfolio",
  description: "Web Portfolio for Nutan",
  icons: {
    icon: "public/favicon.ico", // Path to your favicon file
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
