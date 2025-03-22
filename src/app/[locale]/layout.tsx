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
import metadataTranslations from "@/locales/metadata";
import { InstantSearch } from 'react-instantsearch-dom';
import { searchClient } from "@/lib/meilisearch";
import { NavMenu } from "@/components/widgets/menu-nav";
import { CurrencyProvider } from "@/components/providers/currency";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = params;
  let title = "";
  let description = "";

  const metadata = metadataTranslations[locale as 'en' | 'pt' | 'es'] || metadataTranslations["en"];
  title = metadata.title;
  description = metadata.description;

  return {
    title,
    description,
  };
}

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
          <InstantSearch
            indexName="products"
            searchClient={searchClient}
          >
            <TranslationsProvider
              namespaces={i18nNamespaces}
              locale={locale}
              resources={resources}
            >
              <CurrencyProvider>
                <NavMenu />
                {children}
              </CurrencyProvider>
            </TranslationsProvider>
            <Toaster />
          </InstantSearch>

        </SessionProvider>
      </body>
    </html >
  );
}
