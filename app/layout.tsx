import type { Metadata } from "next";
import { Noto_Serif_KR, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif_KR({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const notoSans = Noto_Sans_KR({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "오늘숲 — 오늘의 감정이, 내일의 글이 됩니다",
  description:
    "오늘감으로 감정을 기록하고, 글숲에서 나만의 글로 피어납니다. 두 가지 서비스가 하나의 여정이 됩니다.",
  openGraph: {
    title: "오늘숲",
    description: "오늘의 감정이, 내일의 글이 됩니다",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${notoSerif.variable} ${notoSans.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-cream text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
