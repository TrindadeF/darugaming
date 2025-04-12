"use client";

import { useState } from "react";

interface Order {
    id: string;
    id_order: string;
    data: string;
    payment: string;
    price: string;
    status: number;
    purchasedProducts: OrderItem[];
}
import ChevronDownSVG from "@/assets/chevron-down.svg";

export default function OrderItem({ data, id_order, payment, price, status, purchasedProducts }: Order) {
    const [selected, setSelected] = useState<boolean>(false);
    return (
        <div className="bg-white/20 hover:bg-white/40 transition p-6 clip-path-element cursor-pointer" >
            <div className="flex md:flex-row flex-col justify-between relative" onClick={() => setSelected(!selected)}>
                <div className="flex-1 md:block md:mb-0 mb-2">
                    <p className="md:text-lg text-md font-semibold text-white/60">{data}</p>
                    <h4 className="md:text-lg text-md font-medium">{id_order}</h4>
                </div>
                <div className="flex-1 md:block flex justify-between md:mb-0 mb-2">
                    <p className="md:text-lg text-md font-semibold text-white/60">Payment</p>
                    <h4 className="md:text-lg text-md font-medium">{payment}</h4>
                </div>
                <div className="flex-1 md:block flex justify-between md:mb-0 mb-2">
                    <p className="md:text-lg text-md font-semibold text-white/60">Price</p>
                    <h4 className="md:text-lg text-md font-medium">{price}</h4>
                </div>
                <div className="flex-1 md:block flex justify-between md:mb-0 mb-2">
                    <p className="md:text-lg text-md font-semibold text-white/60">Status</p>
                    <h4 className="md:text-lg text-md font-semibold text-green-400">{status}</h4>
                </div>
                <ChevronDownSVG className="md:block absolute right-0 top-0" />
            </div>
            <div className={`cursor-auto mt-2 overflow-hidden transition-[max-height] duration-300 ease-in-out ${selected ? "max-h-40" : "max-h-0"}`}>
                <p className="md:text-md text-md font-medium text-white mb-1">Products:</p>
                <ul className="md:text-sm text-md font-medium flex flex-col gap-1">
                    {purchasedProducts.map((item, index) => (
                        <li key={index}>{index + 1}. {item.productId}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
