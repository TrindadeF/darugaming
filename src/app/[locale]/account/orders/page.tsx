

import { OrderPage } from "@/components/account/order";

import { Separator } from "@/components/ui/separator";





export default function Page() {
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