import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css?v=1.0.1";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nutan Nimkar — Backend & Data Engineer",
  description:
    "Backend and data engineer with 2+ years building production data pipelines, distributed systems, and ML-ready infrastructure. Based in Toronto, open to remote.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Nutan Nimkar — Backend & Data Engineer",
    description:
      "Backend and data engineer specializing in Dagster pipelines, Databricks, distributed systems, and production data infrastructure.",
    siteName: "Nutan Nimkar Portfolio",
    images: [{ url: "/pfp.jpeg", width: 400, height: 400, alt: "Nutan Nimkar" }],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nutan Nimkar — Backend & Data Engineer",
    description:
      "Backend and data engineer specializing in production data pipelines and distributed systems.",
    images: ["/pfp.jpeg"],
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
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
