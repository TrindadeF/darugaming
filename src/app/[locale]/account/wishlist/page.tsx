import ProductRecommendation from "@/components/product/recomendation"




export default function Page() {
    const wishlist: Product[] = []
    return (
        <>
            {wishlist.map((product) => (<ProductRecommendation product={product} key={product._id} />))}
        </>
    )
}