'use client'
// import TranslationsProvider from "@/components/providers/translations";
import Image from "next/image";

import LanguageChanger from "@/components/language-changer";
import { useTranslation } from "react-i18next";
import { HeroCarousel } from "@/components/widgets/hero-carousel";
import { BackgroundWrapper } from "@/components/bg-wrapper";
import { ThemeProvider } from "@/components/providers/color";
import { ProductGallery } from "@/components/product/gallery";
import { mockItem } from "@/stories/cart.stories";
import { InfiniteMovingPartners } from "@/components/widgets/infinite-moving-partners";

export default function Home(props: {
  params: Promise<{ locale: string }>;
}) {

  const { t } = useTranslation('home')
  return (

    <div className="flex flex-col items-center justify-center">
      <ThemeProvider>
        <BackgroundWrapper>
          <HeroCarousel />
          <InfiniteMovingPartners />
          <div className="m-4 max-w-7xl overflow-hidden " >
            <ProductGallery items={mockItem} title="Muito foda" description="uma descrição irada" />
          </div>
        </BackgroundWrapper>
      </ThemeProvider>

    </div>
  );
}
