import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { i18n, type Locale } from "@/i18nConfig";
import Header from "@/components/views/header/header";
import { Footer } from "@/components/views/footer";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

const noto = Noto_Sans_KR({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: {
    template: "%s | Referlink",
    default: "Referlink"
  },
  description: "누구나 평판 관리를 쉽게 할 수 있게. 평판조회의 시작, 레퍼링크",
  applicationName: "Referlink",
  keywords: [""],
  openGraph: {
    title: "referlink",
    description: '누구나 평판 관리를 쉽게 할 수 있게. 평판조회의 시작, 레퍼링크',
    url: '',
    siteName: "Referlink",
    images: "/imgs/bg-img.png",
    locale: "ko_KR",
    type: 'website'
  }
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang={params.lang}>
      <body className={noto.className}>
        <Header params={params} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
