"use client"

import { useState } from "react";

import Image from "next/image";

import TagSVG from "@/assets/tag.svg";
import CartSVG from "@/assets/cart.svg";
import WishHeartSVG from "@/assets/wish-heart.svg";
import WishHeartRedSVG from "@/assets/wish-heart-red.svg";
import { useRouter } from "next/navigation";



export default function ProductRecommendation(props: { product: Product }) {
    const router = useRouter()
    const [isHoveredWish, setIsHoveredWish] = useState<boolean>(false);
    function handleClick() {
        router.push(`/products/${props.product.slug}`)
    }
    return (
        <div className="relative">
            <a href="" className="recommendation-content">
                <div className="flex xl:flex-row flex-col md:p-6 p-5 bg-[#3F434B] clip-path-element ">
                    <div className="flex xl:gap-8 gap-4 w-full ">
                        <div className="md:w-96 max-w-60 w-20 md:h-full h-20">
                            {props.product.image && <Image src={props.product.image} className="w-full h-full object-cover clip-path-images" alt={`product ${props.product.title}`} />}
                        </div>
                        <div className="flex flex-col justify-between w-full">
                            <h4 className="lg:text-lg text-md font-medium mb-2 line-clamp-2 mr-4">{props.product.title}</h4>
                            <div className="flex justify-between items-end">
                                <div className="flex flex-col">
                                    {props.product.discount && <p className="md:flex hidden items-center lg:text-base text-sm  text-gray-200 mr-4 line-through"><TagSVG className="mr-2" />R$ 49,99</p>}
                                    <h2 className="lg:text-xl text-lg font-semibold flex items-center">{props.product.finalAmount}<span className="lg:text-sm text-xs font-semibold bg-[#0BC4E5] py-1 px-2 leading-[14px] rounded-full ml-4">-33%</span></h2>
                                </div>
                                <div className="xl:flex hidden  gap-4">
                                    <div className="box-shape">
                                        <button className="object-contain bg-[#0BC4E5] cursor-pointer h-10 shape font-semibold text-black gap-2 px-8"><CartSVG />Comprar</button>
                                    </div>
                                    <div
                                        className="w-10 h-10 cursor-pointer rounded-md flex items-center justify-center bg-white/20 hover:bg-white box-shape wish-recommedation"
                                        onMouseEnter={() => setIsHoveredWish(true)}
                                        onMouseLeave={() => setIsHoveredWish(false)}
                                    >
                                        {isHoveredWish ? <WishHeartRedSVG /> : <WishHeartSVG />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:hidden flex gap-4 pt-4">
                        <div className="box-shape w-full">
                            <button onClick={handleClick} className="w-full object-contain bg-[#0BC4E5] cursor-pointer h-10 shape font-semibold text-black gap-2 px-8 "><CartSVG />Comprar</button>
                        </div>
                        <div
                            className="w-12 h-10 cursor-pointer rounded-md flex items-center justify-center bg-white/20 hover:bg-white"
                            onMouseEnter={() => setIsHoveredWish(true)}
                            onMouseLeave={() => setIsHoveredWish(false)}
                        >
                            {isHoveredWish ? <WishHeartRedSVG /> : <WishHeartSVG />}
                        </div>
                    </div>
                </div>
            </a>
            <div className="recommendation"></div>
        </div>
    )
}