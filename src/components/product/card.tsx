'use client';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import NumberFlow from "@number-flow/react";
import { useCurrency } from "../providers/currency";
import { Badge } from "../ui/badge";
import { Heart, ShoppingCart } from "lucide-react";
import { convertCurrency } from "@/lib/currency";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "../providers/cart";

export function Card(props: { product: Product }) {
    const { currency, rates } = useCurrency()
    const [isWishlisted, setIsWishlisted] = useState(false)
    const { addToCart } = useCart()
    return (
        <motion.div
            className="group relative h-96 w-72 overflow-hidden shadow-2xl"
            whileHover="hover"
            initial="rest"
            style={{
                clipPath: "polygon(0% 15px, 15px 0, 15px 0%, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)"

            }}

        >
            <motion.div
                className="absolute top-4 right-4 z-20"
                variants={{
                    rest: { scale: 0.8, opacity: 0 },
                    hover: { scale: 1, opacity: 1 }
                }}
                transition={{ type: 'spring', stiffness: 300 }}
            >
                <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-black/50 hover:bg-black/80"
                    onClick={() => setIsWishlisted(!isWishlisted)}
                >
                    <Heart
                        className="h-4 w-4 text-white"
                        fill={isWishlisted ? 'currentColor' : 'none'}
                        stroke={isWishlisted ? 'currentColor' : 'white'}
                    />
                </Button>
            </motion.div>

            <motion.div
                className="absolute h-full"
                variants={{
                    rest: { scale: 1 },
                    hover: { scale: 1.05 }
                }}
                transition={{ duration: 0.4 }}
            >
                <img
                    src="https://upload.wikimedia.org/wikipedia/pt/f/f7/Cyberpunk_2077_capa.png"
                    alt="Product"
                    className="h-full w-full object-cover opacity-80 mix-blend-luminosity"
                />
            </motion.div>

            <motion.div
                className="absolute inset-0 flex flex-col justify-end p-6 overflow-hidden"
                variants={{
                    rest: { background: 'linear-gradient(0deg, rgba(0,0,0,0.8) 0%, transparent 50%)' },
                    hover: { background: 'linear-gradient(0deg, rgba(0,0,0,0.95) 30%, transparent 100%)' }
                }}
                transition={{ duration: 0.4 }}
            >

                <motion.div
                    variants={{
                        rest: { y: 110 },
                        hover: { y: 0 }
                    }}
                    transition={{ delay: 0.2 }}
                >
                    <h3 className="mb-2 text-2xl font-bold text-white">
                        {props.product.title}
                    </h3>
                    <NumberFlow
                        format={{
                            style: "currency",
                            currency: currency,
                            currencyDisplay: "narrowSymbol",
                            trailingZeroDisplay: "stripIfInteger",
                        }}
                        value={convertCurrency(props.product?.price, rates[currency])}
                        className="text-2xl font-bold text-white"
                    />
                </motion.div>

                <motion.div
                    className=""
                    variants={{
                        rest: { opacity: 0, y: 50 },
                        hover: { opacity: 1, y: 0 }
                    }}
                    transition={{ delay: 0.2 }}
                >
                    <p className="mb-4 text-neutral-300">{props.product.shortDescription}</p>
                    <div className="flex flex-shrink gap-1 py-2">
                        {props.product.attributes[0].values.map(attribute => (
                            <Badge key={attribute.value}>{attribute.value}</Badge>
                        ))}
                    </div>
                    <motion.div
                        variants={{
                            rest: { scale: 0.8 },
                            hover: { scale: 1 }
                        }}
                    >
                        <div className="flex gap-2 w-48">
                            <Button onClick={(e) => {

                                console.log('oi');
                            }}
                                variant={'outline'} className="w-full hover:bg-gray-300 hover:cursor-pointer " style={{ zIndex: 1000 }}>

                                Buy
                            </Button>
                            <Button onClick={() => addToCart(props.product)} variant={'outline'} className=" hover:bg-gray-300 hover:cursor-pointer " style={{ zIndex: 1000 }}>
                                <ShoppingCart />
                            </Button>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
            <motion.div
                className="absolute inset-0 rounded-xl"
                variants={{
                    rest: { boxShadow: '0 0 0 0 rgba(34, 197, 94, 0)' },
                    hover: { boxShadow: '0 0 20px 2px rgba(34, 197, 94, 0.4)' }
                }}
                transition={{ duration: 0.3 }}
            />
        </motion.div>
    );
}