import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./lib/ui/reset.css";
import Header from "./components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "AiCoummunity",
  description: "Coummunity with AI",
};

export default function RootLayout({
  children,modal
}: Readonly<{
  children: React.ReactNode,
  modal:React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {modal}
        <Header />
        {children}
      </body>
    </html>
  );
}
