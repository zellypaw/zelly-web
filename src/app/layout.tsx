import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zelly - AI로 정리하는 반려동물 성장앨범",
  description: "33,422장의 반려동물 사진, AI가 자동으로 정리해드립니다. 사전예약 시 AI 코스튬 무료 이용권 증정!",
  openGraph: {
    title: "Zelly - AI로 정리하는 반려동물 성장앨범",
    description: "33,422장의 반려동물 사진, AI가 자동으로 정리해드립니다.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* 기본 favicon 설정 */}
        <link rel="icon" href="/zellyLogo.ico" />
        <title>젤리 | 반려동물 성장 앨범</title> {/* 기본 title 설정 */}
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
