import ProductRecommendation from "@/app/components/ProductRecommendation";
import Tabbar from "@/app/components/Tabbar";

export default async function Wishlist() {
    return (
      <div className="md:w-[1100px] w-full container mx-auto mt-20  relative text-white">
        <div className="md:p-10 p-5 backdrop-blur-md clip-path-element" style={{ background: "rgba(49, 55, 66, 0.80)" }}>
            <Tabbar />
            <div className="flex flex-col gap-6 mt-6">
              <ProductRecommendation />
              <ProductRecommendation />
              <ProductRecommendation />
              <ProductRecommendation />
              <ProductRecommendation />
              <ProductRecommendation />
              <ProductRecommendation />
              <ProductRecommendation />
              <ProductRecommendation />
              <ProductRecommendation />
              <ProductRecommendation />
              <ProductRecommendation />
              <ProductRecommendation />
              <ProductRecommendation />
              <ProductRecommendation />
              <ProductRecommendation />
              <ProductRecommendation />
            </div>
        </div>
      </div>
    );
  }