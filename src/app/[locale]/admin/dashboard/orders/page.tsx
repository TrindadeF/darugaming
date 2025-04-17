import { OrderTable } from "@/components/admin/order";
import { mockOrders } from "@/lib/mock/order";

export default function Page() {
    return (
        <div className="w-full">
            <OrderTable data={mockOrders} />
        </div>
    )
}
