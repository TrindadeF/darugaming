"use client";


import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, ShoppingCart, X, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { useCart } from "../providers/cart";
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./sheet";
import { Badge } from "./badge";

function Cart() {
    const currency = 'USD'
    const { cartItem, removeFromCart, updateQuantity } = useCart()


    const totalItems = cartItem.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartItem.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className="relative" variant="outline"> <ShoppingCart /> Cart {totalItems > 0 && <Badge className="absolute -top-2 left-full min-w-5 -translate-x-1/2 px-1" >{totalItems}</Badge>}</Button>
            </SheetTrigger>
            <SheetContent className="max-h-screen">
                <SheetHeader>
                    <SheetTitle >
                        <div className="flex items-center gap-2 mb-3">
                            <ShoppingCart className="w-4 h-4 text-zinc-500" />
                            <h2 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                Cart ({totalItems})
                            </h2>
                        </div>
                    </SheetTitle>
                </SheetHeader>
                <div className="w-full  mx-auto">
                    <div className="flex gap-6">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className={cn(
                                "w-full flex flex-col",
                                "p-4 rounded-xl",
                                "bg-white dark:bg-zinc-900",
                                "sticky top-4",
                                "max-h-[32rem]"
                            )}
                        >


                            <motion.div
                                className={cn(
                                    "flex-1 overflow-y-auto",
                                    "min-h-0",
                                    "-mx-4 px-4",
                                    "space-y-3"
                                )}
                            >
                                <AnimatePresence initial={false} mode="popLayout">
                                    {cartItem.map((item) => (
                                        <motion.div
                                            key={item._id}
                                            layout
                                            initial={{ opacity: 0, scale: 0.96 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.96 }}
                                            transition={{
                                                opacity: { duration: 0.2 },
                                                layout: { duration: 0.2 },
                                            }}
                                            className={cn(
                                                "flex items-center gap-3",
                                                "p-2 rounded-lg",
                                                "bg-zinc-50 dark:bg-zinc-800/50",
                                                "mb-3"
                                            )}
                                        >
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100 truncate">
                                                        {item.title}
                                                    </span>
                                                    <motion.button
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        onClick={() =>
                                                            removeFromCart(item._id)
                                                        }
                                                        className="p-1 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-700"
                                                    >
                                                        <X className="w-3 h-3 text-zinc-400" />
                                                    </motion.button>
                                                </div>
                                                <div className="flex items-center justify-between mt-1">
                                                    <div className="flex items-center gap-1">
                                                        <motion.button
                                                            whileHover={{ scale: 1.1 }}
                                                            whileTap={{ scale: 0.95 }}
                                                            onClick={() =>
                                                                updateQuantity(
                                                                    item._id,
                                                                    -1
                                                                )
                                                            }
                                                            className="p-1 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-700"
                                                        >
                                                            <Minus className="w-3 h-3" />
                                                        </motion.button>
                                                        <motion.span
                                                            layout
                                                            className="text-xs text-zinc-600 dark:text-zinc-400 w-4 text-center"
                                                        >
                                                            {item.quantity}
                                                        </motion.span>
                                                        <motion.button
                                                            whileHover={{ scale: 1.1 }}
                                                            whileTap={{ scale: 0.95 }}
                                                            onClick={() =>
                                                                updateQuantity(
                                                                    item._id,
                                                                    1
                                                                )
                                                            }
                                                            className="p-1 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-700"
                                                        >
                                                            <Plus className="w-3 h-3" />
                                                        </motion.button>
                                                    </div>
                                                    <motion.span
                                                        layout
                                                        className="text-xs text-zinc-500 dark:text-zinc-400"
                                                    >
                                                        <NumberFlow
                                                            format={{
                                                                style: "currency",
                                                                currency: currency,
                                                                trailingZeroDisplay: "stripIfInteger",
                                                            }}
                                                            value={item.price * item.quantity}

                                                        />
                                                    </motion.span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </motion.div>

                        </motion.div>
                    </div>
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <motion.div
                            layout
                            className={cn(
                                "pt-3 mt-3",
                                "border-t border-zinc-200 dark:border-zinc-800",
                                "bg-white dark:bg-zinc-900"
                            )}
                        >
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                    Total
                                </span>
                                <motion.span
                                    layout
                                    className="text-sm font-semibold text-zinc-900 dark:text-zinc-100"
                                >
                                    <NumberFlow value={totalPrice} />
                                </motion.span>
                            </div>
                            <Button size="sm" className="w-full gap-2">
                                <CreditCard className="w-4 h-4" />
                                Go to checkout
                            </Button>
                        </motion.div>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet >

    );
}

export { Cart }
