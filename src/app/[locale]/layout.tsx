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
import { ThemeProvider } from "@/components/providers/theme";
import { FontProvider } from "@/components/providers/font";
import { cookies } from "next/headers";



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
  let title = "";
  let description = "";

  const metadata = metadataTranslations[locale as 'en' | 'br' | 'es'] || metadataTranslations["en"];
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

const i18nNamespaces = ['home', 'account', 'nav', 'footer', 'auth'];

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
    <html lang={locale} dir={dir(locale)} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${manrope.variable} antialiased`}
      >
        <SessionProvider initialSession={session}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <FontProvider defaultFont={font || geistMono.variable}>
              <MeilisearchProvier>
                <TranslationsProvider
                  namespaces={i18nNamespaces}
                  locale={locale}
                  resources={resources}
                >
                  <CurrencyProvider>
                    <CartProvider>
                      <NavMenu />
                      {children}
                      <Footer />
                      <Toaster />
                    </CartProvider>
                  </CurrencyProvider>
                </TranslationsProvider>
              </MeilisearchProvier>
            </FontProvider>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html >
  );
}
