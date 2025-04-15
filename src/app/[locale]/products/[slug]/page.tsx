'use server';

import Image from "next/image";
import BgStars from "@/../public/assets/background-stars.png";
import { notFound, redirect } from "next/navigation";
import { toast } from "sonner";
import { ProductCollection } from "@/components/product/colection";
import { BuyProduct } from "@/components/product/buy";
import ProductRecommendation from "@/components/product/recomendation";
import { ProductReview } from "@/components/product/review";
// import { translateText } from "@/lib/translator";
// import { TargetLanguageCode } from "deepl-node";

import i18nConfig from "@/i18nConfig";
import initTranslations from "@/app/i18n";
import { Metadata } from "next";
import { AboutProduct } from "@/components/product/about";

const i18nNamespaces = ['product'];
export async function generateMetadata(props: { params: Promise<{ slug: string, locale: string }> }): Promise<Metadata> {
  const { slug } = await props.params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/product/${slug}`);
  if (!res.ok) {

    return ({
      title: 'sem title',
      description: 'sem description'
    })
  }
  const product: Product = await res.json()
  // const title = await translateText(product.title, locale.toUpperCase() as TargetLanguageCode) || 'title';
  // const description = await translateText(product.metaDescription || '', locale.toUpperCase() as TargetLanguageCode) || 'description';
  const title = product.title || 'title'
  const description = product.metaDescription || 'description'
  return ({
    title, description
  })
}

export default async function Page(props: {
  params: Promise<{ slug: string, locale: string }>;
}) {
  const { slug, locale } = await props.params;
  if (!i18nConfig.locales.includes(locale)) {
    notFound();
  }
  const { t } = await initTranslations(locale, i18nNamespaces);
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/product/${slug}`)
  if (!res.ok) {
    toast(t('productNotFound.title'), {
      description: t('productNotFound.description')
    });

    redirect('/products')
  }

  const product: Product = await res.json()
  return (
    <>
      <div className="w-full" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 80%)" }}>
        <Image fill src={product.backgroundImage as string} alt="bg-product" className="w-full md:h-[800px] h-[400px] object-cover" />
      </div>
      <div className="w-full container mx-auto md:-mt-100 -mt-40 z-10 relative text-white pt-50 md:pt-200">
        <div className="flex gap-16 w-full">
          <div className="w-full flex-2 flex-col flex md:gap-16 gap-6">
            <div className="w-full">
              <ProductCollection images={product.images.map(image => ({ src: image, alt: image }))} video={{ image: { src: product.video, alt: product.video }, src: product.video }} />
            </div>
            <div className="md:hidden block w-full clip-path-element">
              <BuyProduct product={product} />
            </div>
            <div className="md:p-8 p-5 backdrop-blur-md clip-path-element" style={{ background: "rgba(49, 55, 66, 0.80)" }}>
              <AboutProduct product={product} />
              <h2 className="md:text-2xl text-xl font-semibold mb-6 py-2">{t('recommendationTitle')}</h2>

              <div className="flex flex-col gap-6 py-4">
                <ProductRecommendation product={product} />
              </div>
              <ProductReview product={product} />
            </div>
          </div>
          <div className="lg:block w-full hidden flex-1 flex-col clip-path-element">
            <BuyProduct product={product} />
          </div>
        </div>
      </div>
    </>
  )
}
