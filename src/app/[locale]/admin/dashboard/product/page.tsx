import { ProductTable } from "@/components/admin/product";
import { mockItem } from "@/stories/cart.stories";

export default function Page() {

    return <div className="w-full"><ProductTable data={[mockItem[0]]} /></div>
}