
import Image from "next/image";
import BgStars from "@/assets/background-stars.png";
import { notFound, redirect } from "next/navigation";
import { toast } from "sonner";
import { ProductCollection } from "@/components/product/colection";
import { BuyProduct } from "@/components/product/buy";
import ProductRecommendation from "@/components/product/recomendation";
import { ProductReview } from "@/components/product/review";
import { translateText } from "@/lib/translator";
import { TargetLanguageCode } from "deepl-node";
import { Metadata } from "next";
import i18nConfig from "@/i18nConfig";
import initTranslations from "@/app/i18n";
const i18nNamespaces = ['product'];
export async function generateMetadata(props: { params: Promise<{ slug: string, locale: string }> }): Promise<Metadata> {
  const { slug, locale } = await props.params;
  const res = await fetch(`/api/product/metadata/${slug}`);
  if (!res.ok) return { title: '', description: '' }
  const product: Product = await res.json()
  const title = await translateText(product.title, locale.toUpperCase() as TargetLanguageCode);
  const description = await translateText(product.metaDescription || '', locale.toUpperCase() as TargetLanguageCode);
  return {
    title, description
  }
}

export default async function Page(props: {
  params: Promise<{ slug: string, locale: string }>;
}) {
  const { slug, locale } = await props.params;
  if (!i18nConfig.locales.includes(locale)) {
    notFound();
  }

  const res = await fetch(`/api/project/${slug}`)
  if (!res.ok) {
    toast("Ops,algo deu errado", {
      description: ' A mercadoria escolhida não existe'
    })
    redirect('/products')
  }
  const { t } = await initTranslations(locale, i18nNamespaces);
  console.log(t)
  const product: Product = await res.json()
  return <>
    <div className="w-full fixed">
      <Image src={BgStars} className="w-full" alt="background-stars" />
    </div>
    <div className="w-full" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 80%)" }}>
      {product.backgroundImage && <Image src={product.backgroundImage} alt="bg-product" className="w-full md:h-[800px] h-[400px] object-cover " />}
    </div>
    <div className="w-full container mx-auto md:-mt-100 -mt-40 z-10 relative text-white">
      <div className="flex gap-16 w-full">
        <div className="w-full flex-2 flex-col flex md:gap-16 gap-6">
          <div className="w-full">
            <ProductCollection images={product.images.map(image => ({ src: image, alt: image }))} video={{ image: { src: product.video, alt: product.video }, src: product.video }} />
          </div>
          <div className="md:hidden block w-full clip-path-element">
            <BuyProduct product={product} />
          </div>
          <div className="md:p-8 p-5 backdrop-blur-md clip-path-element" style={{ background: "rgba(49, 55, 66, 0.80)" }}>
            <h2 className="md:text-2xl text-xl font-semibold mb-6">Who viewed this product also bought</h2>
            <div className="flex flex-col gap-6">
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
  </>;
}
