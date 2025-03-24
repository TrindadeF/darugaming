'use client'
import { HeroCarousel } from "@/components/widgets/hero-carousel";
import { BackgroundWrapper } from "@/components/bg-wrapper";
import { ColorProvider } from "@/components/providers/color";
import { ProductGallery } from "@/components/product/gallery";
import { mockItem } from "@/stories/cart.stories";
import { InfiniteMovingPartners } from "@/components/widgets/infinite-moving-partners";
import { useTranslation } from "react-i18next";

export default function Home() {

  const { t } = useTranslation('home')
  return (

    <div className="flex flex-col items-center justify-center">
      <ColorProvider>
        <BackgroundWrapper>
          <HeroCarousel />
          <InfiniteMovingPartners />
          <div className="m-4 max-w-7xl overflow-hidden " >
            <ProductGallery items={mockItem} title={t('title')} description={t('description')} />
          </div>
        </BackgroundWrapper>
      </ColorProvider>

    </div>
  );
}
