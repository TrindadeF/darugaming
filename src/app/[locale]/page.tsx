'use client'

import { HeroCarousel } from "@/components/widgets/hero-carousel";
import { BackgroundWrapper } from "@/components/bg-wrapper";
import { ColorProvider } from "@/components/providers/color";
import { ProductGallery } from "@/components/product/gallery";
import { InfiniteMovingPartners } from "@/components/widgets/infinite-moving-partners";
import { useTranslation } from "react-i18next";
import { useProducts } from "@/components/providers/products";

export default function Home() {
  const { t } = useTranslation('home')
  const { preOrder, bestSales, trending } = useProducts()
  return (
    <ColorProvider>
      <BackgroundWrapper>
        <div className="flex flex-col items-center justify-center">
          <HeroCarousel />
          <InfiniteMovingPartners />
          <div className="m-4 max-w-7xl overflow-hidden " >
            <ProductGallery items={trending} title={t('title')} description={t('description')} />
          </div>
          <div className="m-4 max-w-7xl overflow-hidden " >
            <ProductGallery items={bestSales} title={'mais vendidos'} />
          </div>
          <div className="m-4 max-w-7xl overflow-hidden " >
            <ProductGallery items={preOrder} title={'Pré-sale'} />
          </div>
        </div>
      </BackgroundWrapper>
    </ColorProvider>
  );
}
