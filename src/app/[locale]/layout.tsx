import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Manrope } from "next/font/google";
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


import { NavMenu } from "@/components/widgets/menu-nav";
import { CurrencyProvider } from "@/components/providers/currency";
import { Footer } from "@/components/widgets/footer";
import { MeilisearchProvier } from "@/components/providers/meilisearch";
import { CartProvider } from "@/components/providers/cart";

import { FontProvider } from "@/components/providers/font";


import { cookies } from "next/headers";
import { MainNav } from "@/components/widgets/main-nav";
import { ZodProvider } from "@/components/providers/zodi18n";




const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!i18nConfig.locales.includes(locale)) {
    notFound();
  }
  const { t } = await initTranslations(locale, ['metadata']);

  return {
    icons: {
      icon: [
        { url: "favicon-96x96.png", type: "image/png", sizes: "96x96" },
        { url: "favicon.svg", type: "image/svg+xml" },
      ],
      shortcut: "/favicon.ico",
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    },
    title: t('title'),
    description: t('description'),
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASEURL}`),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `${process.env.NEXT_PUBLIC_BASEURL}`,
      siteName: "Por",
      locale,
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}
const i18nNamespaces = ['home', 'account', 'nav', 'footer', 'auth', 'about', 'form', 'terms', 'product'];

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
  const cookieStore = await cookies()
  const font = cookieStore.get('font')?.value


  const { resources } = await initTranslations(locale, i18nNamespaces);
  const session = await getServerSession();
  return (
    <html lang={locale} dir={dir(locale)} suppressHydrationWarning className="dark" >
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${manrope.variable} antialiased`}
      >
        <SessionProvider initialSession={session}>
          <FontProvider defaultFont={font || geistMono.variable}>
            <MeilisearchProvier>
              <TranslationsProvider
                namespaces={i18nNamespaces}
                locale={locale}
                resources={resources}
              >
                <ZodProvider>
                  <CurrencyProvider>
                    <CartProvider>
                      <NavMenu />
                      <MainNav />
                      {children}
                      <Footer />
                      <Toaster />
                    </CartProvider>
                  </CurrencyProvider>
                </ZodProvider>
              </TranslationsProvider>
            </MeilisearchProvier>
          </FontProvider>
        </SessionProvider>
      </body >
    </html >
  );
}
