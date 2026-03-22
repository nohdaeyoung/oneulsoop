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
  metadataBase: new URL("https://oneulsoop.324.ing"),
  title: {
    default: "오늘숲 — 오늘의 감정이, 내일의 글이 됩니다",
    template: "%s | 오늘숲",
  },
  description:
    "오늘감으로 매일의 감정을 기록하세요. 쌓인 감정의 결이 글숲에서 나만의 글쓰기로 피어납니다. AI 감정 일기와 글쓰기 분석 플랫폼.",
  keywords: [
    "오늘숲",
    "오늘감",
    "글숲",
    "AI 감정 일기",
    "글쓰기 분석",
    "감정 기록",
    "일기 앱",
    "문체 분석",
    "감정 DNA",
    "글쓰기 플랫폼",
  ],
  authors: [{ name: "오늘숲" }],
  creator: "오늘숲",
  publisher: "오늘숲",
  openGraph: {
    title: "오늘숲 — 오늘의 감정이, 내일의 글이 됩니다",
    description:
      "오늘감으로 감정을 기록하고, 글숲에서 나만의 글로 피어납니다. 두 가지 서비스가 하나의 여정이 됩니다.",
    url: "https://oneulsoop.324.ing",
    siteName: "오늘숲",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "오늘숲 — 오늘의 감정이, 내일의 글이 됩니다",
    description:
      "오늘감으로 감정을 기록하고, 글숲에서 나만의 글로 피어납니다.",
    creator: "@oneulsoop",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://oneulsoop.324.ing",
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
