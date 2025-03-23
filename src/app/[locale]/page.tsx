'use client'

import { useTranslation } from "react-i18next";
import { HeroCarousel } from "@/components/widgets/hero-carousel";
import { BackgroundWrapper } from "@/components/bg-wrapper";
import { ColorProvider } from "@/components/providers/color";
import { ProductGallery } from "@/components/product/gallery";
import { mockItem } from "@/stories/cart.stories";
import { InfiniteMovingPartners } from "@/components/widgets/infinite-moving-partners";

export default async function Home(props: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await props.params
  console.log(locale)

  return (

    <div className="flex flex-col items-center justify-center">
      <ColorProvider>
        <BackgroundWrapper>
          <HeroCarousel />
          <InfiniteMovingPartners />
          <div className="m-4 max-w-7xl overflow-hidden " >
            <ProductGallery items={mockItem} title="Muito foda" description="uma descrição irada" />
          </div>
        </BackgroundWrapper>
      </ColorProvider>

    </div>
  );
}
