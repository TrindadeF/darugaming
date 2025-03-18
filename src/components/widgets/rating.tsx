import { StarRating } from "@/components/ui/star-rating"


function Rating(props: { defaultValue: number, setRating: (rating: number) => void }) {
    return (
        <div className="space-y-2 text-center">
            <StarRating
                defaultValue={props.defaultValue}
                onRate={props.setRating}
            />
        </div>
    )
}



export { Rating }