import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import MixpanelTracker from "@/components/MixpanelTracker";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zellypaw.com"),
  title: "젤리 | 반려동물 성장 앨범",
  description: "갤러리에 잠든 귀여움이 기록이 되는 순간",
  keywords: ["반려동물", "강아지", "고양이", "성장앨범", "AI 사진", "젤리", "zelly", "반려동물 갤러리", "클라우드 포토앨범"],
  openGraph: {
    title: "젤리 | 반려동물 성장 앨범",
    description: "갤러리에 잠든 귀여움이 기록이 되는 순간",
    url: "https://zellypaw.com",
    siteName: "젤리(Zelly)",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/preview1200x630.png",
        width: 1200,
        height: 630,
        alt: "젤리 | 반려동물 성장 앨범",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "젤리 | 반려동물 성장 앨범",
    description: "갤러리에 잠든 귀여움이 기록이 되는 순간",
    images: ["/preview1200x630.png"],
  },
  verification: {
    other: {
      "naver-site-verification": "c8d3ca976c8f8483c8b82456067e4bf6eeeb9e30",
    },
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Suspense>
          <MixpanelTracker />
        </Suspense>
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
