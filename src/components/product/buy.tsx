"use client"

import { useState } from "react";

import { Tooltip as ReactTooltip } from "react-tooltip";

import Image from "next/image";


import Lightning from "@/assets/lightning.svg";
import SupportAgent from "@/assets/support-agent.svg";
import Global from "@/assets/global.svg";
import Pc from "@/assets/pc.svg";
import Chevron from "@/assets/chevron.svg";
import Tag from "@/assets/tag.svg";
import Cart from "@/assets/cart.svg";
import UserGuest from "@/assets/user-guest.svg";
import WishHeart from "@/assets/wish-heart.svg";
import WishHeartRedOutline from "@/assets/wish-heart-red-outline.svg";
import Whatsapp from "@/assets/whatsapp.svg";


import LogoPayments01 from "@/assets/logo-payments-01.png"
import LogoPayments02 from "@/assets/logo-payments-02.png"
import LogoPayments03 from "@/assets/logo-payments-03.png"
import LogoPayments04 from "@/assets/logo-payments-04.png"
import LogoPayments05 from "@/assets/logo-payments-05.png"
import LogoPayments06 from "@/assets/logo-payments-06.png"
import LogoPayments07 from "@/assets/logo-payments-07.png"
import LogoPayments08 from "@/assets/logo-payments-08.png"

import { format } from "date-fns";
import NumberFlow from "@number-flow/react";
import { Rating } from "../widgets/rating";
import { ChevronLeft } from "lucide-react";
import { useCurrency } from "../providers/currency";

type BuyProductProps = {
    product: Partial<Product>
}

function BuyProduct({ product }: BuyProductProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { currency } = useCurrency()
    const dropdownItems: string[] = ["Standard", "Champions Edition"];
    const [selectOption, setSelectOption] = useState<string>(dropdownItems[0]);

    //Botão de Desejo
    const [isHoveredWish, setIsHoveredWish] = useState<boolean>(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const onOptionClicked = (value: string) => {
        setSelectOption(value);
        setIsOpen(false);
    }
    const handleSetRating = (rating: number) => {
        console.log('new rating', rating)
    }
    const handleBuy = () => {
        console.log('buyed')
    }
    return (
        <div className="w-full md:p-8 p-5 backdrop-blur-md" style={{ background: "rgba(49, 55, 66, 0.80)" }}>
            <div className="flex gap-x-4 mb-6">
                {product.isPreOrder && <>
                    <span className="md:text-md text-sm py-2 px-4 font-semibold text-black" style={{ background: "linear-gradient(259deg, #0BC4E5 -24.82%, #67E8FF 18.51%, rgba(22, 220, 255, 0.82) 108.82%)" }}>Pre-order</span>
                    <span className="md:text-md text-sm py-2 px-4 border border-gray-400">{product.createdAt ? format(product.createdAt, 'dd/MM/yyy') : ''}</span>
                </>
                }
            </div>
            <div className="flex items-center gap-x-2 mb-2">
                {product.rating && <Rating defaultValue={product.rating} setRating={(e) => handleSetRating(e)} />}
                <span>({product.rating})</span>
            </div>
            <h1 className="md:text-2xl text-xl font-semibold mb-2">{"Marvel's"} {product.title}</h1>
            <p className="md:text-lg text-sm text-gray-100 mb-6">{product.shortDescription}</p>
            <div
                className="flex py-3 2xl:px-6 md:px-4 px-2 justify-between gap-4 mb-6"
                style={{ background: "linear-gradient(85deg, rgba(11, 196, 229, 0.24) 11.1%, rgba(0, 216, 255, 0.50) 70.51%, #02D9FF 113.22%)" }}
            >
                <div className="flex-1 flex justify-center items-center font-medium md:text-sm text-[10px]" data-tooltip-id="my-tooltip-1"><Image src={Lightning} alt="Entrega" className="mr-2" width={20} height={20} /><span>Instant <br />Delivery</span></div>
                <ReactTooltip id="my-tooltip-1" className="w-24" place="top" content="The account with the game will be delivered instantly." />
                <div className="whitespace-nowrap px-2 flex-auto flex justify-center items-center font-medium md:text-sm text-[10px] border border-t-0 border-b-0 border-[#0BC4E5]" data-tooltip-id="my-tooltip-2"><Image src={SupportAgent} alt="Suporte" className="mr-2" width={20} height={20} /><span>Support from<br /> 2PM to 11PM</span></div>
                <ReactTooltip id="my-tooltip-2" place="top" content="Lisbon time." />
                <div className="flex-1 flex justify-center items-center font-medium md:text-sm text-[10px]" data-tooltip-id="my-tooltip-3"><Image src={Global} alt="Global" className="mr-2" width={20} height={20} /><span>Global <br />Region</span></div>
                <ReactTooltip id="my-tooltip-3" place="top" content="The game works worldwide." />
            </div>
            <p className="text-base font-medium mb-4">Select rental period options:</p>
            <div className="border border-white mb-5 ">
                <div className="flex">
                    <div className="border border-t-0 border-l-0 border-b-0 border-white/20 py-5 px-6 flex gap-2 ">
                        <Image src={Pc} alt="PC" width={20} height={20} />
                        PC
                    </div>
                    <div className="relative w-full z-10 ">
                        <button
                            className="flex justify-between cursor-pointer hover:bg-white/10 transition w-full font-medium py-5 px-6 rounded inline-flex items-center"
                            onClick={toggleDropdown}
                        >
                            {selectOption}
                            <ChevronLeft />
                        </button>
                        <ul className={`absolute ${isOpen ? 'block' : 'hidden'} w-full border bg-[#2A2F37] text-white pt-1 custom-dropdown`}>
                            {dropdownItems.map((item, index) => (
                                <li key={index} className="hover:bg-white/20 cursor-pointer py-3 px-6" onClick={() => onOptionClicked(item)}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex md:mb-6 mb-8">
                {product.price && (
                    <>
                        {product.discount ? (
                            <>
                                <p className="flex items-center md:text-xl text-lg text-gray-200 mr-4 line-through">
                                    <Image src={Tag} alt="Tag" className="mr-2" width={20} height={20} />

                                    {product.price.toFixed(2)}

                                </p>
                                <h2 className="md:text-4xl text-2xl font-semibold flex items-center">
                                    <NumberFlow
                                        format={{
                                            style: "currency",
                                            currency: currency,
                                            trailingZeroDisplay: "stripIfInteger",
                                        }}
                                        value={product.price * (1 - product.discount / 100)}
                                        className="mr-4"
                                    />
                                    <span className="text-sm font-semibold bg-[#0BC4E5] py-1 px-2 rounded-full">
                                        -{product.discount}%
                                    </span>
                                </h2>
                            </>
                        ) : (
                            <h2 className="md:text-4xl text-2xl font-semibold flex items-center">
                                <NumberFlow
                                    format={{
                                        style: "currency",
                                        currency: currency,
                                        trailingZeroDisplay: "stripIfInteger",
                                    }}
                                    value={product.price}
                                />
                            </h2>
                        )}
                    </>
                )}
            </div>
            <div className="flex flex-col gap-3">
                <div className="box-shape">
                    <button onClick={handleBuy} className="w-full bg-[#0BC4E5]  cursor-pointer h-14 shape button-product font-semibold text-black gap-2"><Image src={Cart} alt="Carrinho" width={20} height={20} />Buy Now</button>
                </div>
                <div className="box-shape">
                    <button onClick={handleBuy} className="w-full bg-[#0BC4E5]  cursor-pointer h-14 shape-outline button-product font-semibold text-[#00D8FF] gap-2"><Image src={UserGuest} alt="Carrinho" width={20} height={20} />Buy now as Guest</button>
                </div>
                <div
                    className="box-shape wish"
                    onMouseEnter={() => setIsHoveredWish(true)}
                    onMouseLeave={() => setIsHoveredWish(false)}
                >
                    <button className="w-full bg-[#0BC4E5]  cursor-pointer h-14 shape normal button-product font-medium gap-2">{isHoveredWish ? <Image src={WishHeartRedOutline} alt="Carrinho" width={20} height={20} /> : <Image src={WishHeart} alt="Carrinho" width={20} height={20} />}Add to Wishlist</button>
                </div>
            </div>
            <div className="border border-white opacity-20 my-8"></div>
            <div className="box-shape whatsapp">
                <button className="w-full bg-[#0BC4E5] cursor-pointer h-14 shape whatsapp font-medium font-semibold text-black gap-2"> <Image src={Whatsapp} alt="Carrinho" width={20} height={20} /> Ask your question via WhatsApp</button>
            </div>
            <p className="text-base font-medium py-4">Secure checkout guaranteed.</p>
            <div className="flex flex-wrap gap-2 mr-10">
                <Image src={LogoPayments01} alt="stripe" />
                <Image src={LogoPayments02} alt="mastercard" />
                <Image src={LogoPayments03} alt="visa" />
                <Image src={LogoPayments04} alt="pix" />
                <Image src={LogoPayments05} alt="google pay" />
                <Image src={LogoPayments06} alt="bitcoin" />
                <Image src={LogoPayments07} alt="ethereum" />
                <Image src={LogoPayments08} alt="mercado pago" />
            </div>
        </div >
    )
}

export { BuyProduct }