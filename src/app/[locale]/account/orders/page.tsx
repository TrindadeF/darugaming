

import { OrderPage } from "@/components/account/order";
import { Separator } from "@/components/ui/separator";


<<<<<<< HEAD

const column: ColumnDef<Order>[] = [
    {
        accessorKey: "items",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="items" />
        ),
        accessorFn: (row) => row.items.map(item => item.productId) || "N/A",
    },
    {
        accessorKey: "quantity",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="quantity" />
        ),
        accessorFn: (row) => row.quantity || "N/A",
    },
    {
        accessorKey: "amount",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="amount" />
        ),
        accessorFn: (row) => row.amount || "N/A",
    },
    {
        accessorKey: "status",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="status" />
        ),
        accessorFn: (row) => row.status || "N/A",
    },
];
export default function Page() {
=======
export default async function Page() {
>>>>>>> a492cb071cac4c71a27da4a7e6324a5ddaa27c07
    return <div className="space-y-6">
        <div>
            <h3 className="text-lg font-medium">Orders</h3>
            <p className="text-sm text-muted-foreground">
                This is your orders!
            </p>
        </div>
        <Separator />
        <OrderPage />
    </div>
}