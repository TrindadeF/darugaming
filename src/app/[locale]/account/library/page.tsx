import Library from "@/components/account/library";




export default function Page() {
    const products: Product[] = []
    return (
        <>
            {
                products.map((product) => (
                    <Library key={product._id} product={product} />
                ))
            }
        </>
    )
}