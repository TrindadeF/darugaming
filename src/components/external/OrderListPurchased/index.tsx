import React from 'react'
import OrderItem from "./OrderItem";


interface OrderListPurchasedProps {
    orders: Order[];
}

export default function OrderListPurchased({ orders }: OrderListPurchasedProps) {
    return (
        <div className="grid gap-6 md:w-240 w-full mx-auto">
            {orders.map((item, i) => (
                <OrderItem
                    key={i}
                    id={item._id}
                    data={item.items[i].productId
                    }
                    id_order={String(item.topupId)}
                    payment={String(item.transactionId)}
                    price={String(item.amount)}
                    status={item.status}
                    purchasedProducts={item.items}
                />
            ))}
        </div>
    )
}