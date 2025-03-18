
import { Rating } from "../widgets/rating";
function ProductReview(props: { product: Partial<Product> }) {
    const handleSetRating = (rating: number) => {
        console.log('new rating', rating)
    }
    return <div className="md:p-8 p-5 backdrop-blur-[12.5px] clip-path-element" style={{ background: "rgba(49, 55, 66, 0.80)" }}>
        {/* About the product */}
        <h2 className="md:text-2xl text-xl font-semibold mb-6">Review</h2>
        <div className="flex items-center justify-center md:my-18 my-10"><p className="md:text-xl text-md opacity-60">No reviews</p></div>
        <textarea className="transition border border-white/60 focus:border-white/100 w-full resize-y md:h-56 h-30 p-4 font-medium outline-none focus:bg-white/10" placeholder="Send a message" />
        <p className="md:text-lg text-base mt-4 mb-2">Rating</p>
        <div className="flex gap-2 md:mb-0 mb-4">
            {props.product.rating && <Rating defaultValue={props.product.rating} setRating={handleSetRating} />}
        </div>
        <div className="box-shape">
            <button className="ml-auto md:w-fit w-full bg-[#0BC4E5] cursor-pointer h-14 shape button-product font-semibold text-black gap-2 px-10">Submit review</button>
        </div>
    </div>
}
export { ProductReview }