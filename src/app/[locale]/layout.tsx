import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import i18nConfig from "@/i18nConfig";
import { notFound } from "next/navigation";
import { dir } from "i18next";
import { Toaster } from "@/components/ui/sonner"
import TranslationsProvider from "@/components/providers/translations";
import initTranslations from "../i18n";
import { getServerSession } from "@/lib/auth/server-session";
import SessionProvider from "@/components/providers/session";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "mock title",
  description: "mock description",
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

const i18nNamespaces = ['home', 'account', 'nav'];
export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!i18nConfig.locales.includes(locale)) {
    notFound();
  }


  const { resources } = await initTranslations(locale, i18nNamespaces);
  const session = await getServerSession();
  return (
    <html lang={locale} dir={dir(locale)}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider initialSession={session}>
          <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}
          >
            {children}
          </TranslationsProvider>
          <Toaster />
        </SessionProvider>
      </body>
    </html >
  );
}
