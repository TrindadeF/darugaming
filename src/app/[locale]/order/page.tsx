'use client';

import { useCart } from "@/components/providers/cart"
import { Button } from "@/components/ui/button"
import NumberFlow from "@number-flow/react";
import { CreditCard } from "lucide-react";

export default function Page() {

    const { removeFromCart, cartItem } = useCart()
    const totalItems = cartItem.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartItem.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
    return (
        <>
            <h1 className="text-3xl font-bold">Revise seu pedido</h1>

            <div className="flex flex-col gap-4 mt-4 ">
                {cartItem.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-64 bg-white/10 backdrop-blur-md p-4 rounded-xl">
                        <p className="text-gray-300">Seu carrinho está vazio.</p>
                        <Button
                            onClick={() => window.location.href = "/products"}
                            className="mt-4"
                        >
                            Ir para a loja
                        </Button>
                    </div>
                ) : (
                    cartItem.map((product) => (
                        <div
                            key={product._id}
                            className="flex justify-between items-center bg-white/10 backdrop-blur-md p-4 rounded-xl"
                        >
                            <div>
                                <h2 className="text-xl font-semibold">{product.title}</h2>
                                <p className="text-sm text-gray-300">
                                    {product.quantity} x R$ {product.price.toFixed(2)}
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <p className="text-lg font-semibold">
                                    R$ {(product.price * product.quantity).toFixed(2)}
                                </p>
                                <button
                                    onClick={() => removeFromCart(product._id)}
                                    className="text-red-400 hover:text-red-600 transition"
                                >
                                    Remover
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {
                cartItem.length > 0 && (
                    <div className="mt-10 bg-white/10 backdrop-blur-md p-6 rounded-xl">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                Total
                            </span>
                            <span
                                className="text-sm font-semibold text-zinc-900 dark:text-zinc-100"
                            >
                                <NumberFlow value={totalPrice} />
                            </span>
                        </div>
                        <Button size="sm" className="w-full gap-2">
                            <CreditCard className="w-4 h-4" />
                            Go to checkout
                        </Button>
                    </div>
                )
            }
        </>
    )
}