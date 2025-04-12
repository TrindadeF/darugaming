'use client'

import { useEffect, useRef, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Image, { StaticImageData } from "next/image";
import Tabbar from "../external/Tabbar";

interface LibraryProps {
    product: Product;
}

export default function Library({ product }: LibraryProps) {
    const elementRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState<number>(0);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [viewProductSelected, setViewProductSelected] = useState<string>("");
    const [productSelectKeyValidated, setProductSelectKeyValidated] = useState<string>("");
    const [loadingState, setLoadingState] = useState(false);
    const [confirmPopupView, setConfirmPopupView] = useState<boolean>(false);
    const popupRef = useRef<HTMLDivElement>(null);
    const [confirmedProducts, setConfirmedProducts] = useState<Set<string>>(new Set());

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsMobile(window.innerWidth <= 768);
            const handleResize = () => setIsMobile(window.innerWidth <= 768);
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    useEffect(() => {
        if (!elementRef.current) return;

        const observer = new ResizeObserver(() => {
            if (elementRef.current) {
                const offHeight = elementRef.current?.offsetHeight + 40;
                setHeight(offHeight || 0);
            }
        });

        observer.observe(elementRef.current);
        return () => observer.disconnect();
    }, [viewProductSelected]);

    const handleViewProduct = (id: string) => {
        setViewProductSelected(id);
        setProductSelectKeyValidated(id);
        setLoadingState(false);
        setTimeout(() => setLoadingState(true), 1000);
        if (id === viewProductSelected) closeKeyAuthcode();
    };

    const closeKeyAuthcode = () => {
        setViewProductSelected("");
        setLoadingState(false);
    };

    const handleConfirmViewKeyButton = () => {
        setConfirmedProducts(prev => new Set(prev.add(product._id)));
        setConfirmPopupView(false);
    };

    return (
        <>
            <div className="absolute top-0 left-0 w-full h-120 overflow-hidden">
                {viewProductSelected === product._id && product.backgroundImage && (
                    <div className="relative background-product-selected h-full">
                        <Image
                            src={product.backgroundImage}
                            alt=""
                            className="h-full w-full object-cover"
                            fill
                            priority
                        />
                    </div>
                )}
            </div>

            <div className="md:w-[1100px] w-full container mx-auto mt-20 relative text-white">
                <div className="md:p-10 p-5 backdrop-blur-md clip-path-element" style={{ background: "rgba(49, 55, 66, 0.80)" }}>
                    <Tabbar />

                    <div
                        className={`${viewProductSelected === product._id ? "bg-cyan-300 p-3 clip-path-element cursor-pointer selected"
                            : "bg-white/20 p-3 clip-path-element hover:bg-cyan-400 transition cursor-pointer"}`}
                        onClick={() => handleViewProduct(product._id)}>

                        <Image
                            className="hover:brightness-50 transition w-full object-cover clip-path-element"
                            src={isMobile && product.backgroundImage ? product.backgroundImage : product.image as string}
                            alt={product.title}
                            width={300}
                            height={150}
                        />
                    </div>

                    {product._id === viewProductSelected && (
                        <div style={{ height }} ref={elementRef} className="absolute md:p-10 p-6 md:mt-8 left-0 z-100 w-full md:border-16 border-10 border-cyan-300 bg-cyan-400/20">
                            {!loadingState ? (
                                <>
                                    <div className="md:mb-12 mb-6">
                                        <Skeleton className="h-[30px] max-w-[600px] w-[90%]" />
                                    </div>
                                    <div className="flex md:flex-row flex-col md:gap-8 mb-6">
                                        <div className="mb-4 w-full">
                                            <Skeleton className="h-[20px] max-w-[200px] w-[90%] mb-2" />
                                            <Skeleton className="h-[60px] w-full" />
                                        </div>
                                        <div className="mb-4 w-full">
                                            <Skeleton className="h-[20px] max-w-[200px] w-[90%] mb-2" />
                                            <Skeleton className="h-[60px] w-full" />
                                        </div>
                                    </div>
                                    <div className="flex md:flex-row flex-col gap-6">
                                        <div className="w-50 mr-10">
                                            <Skeleton className="h-[20px] w-[90%] mb-2" />
                                            <Skeleton className="h-[20px] w-full" />
                                        </div>
                                        <div className="w-50 mr-10">
                                            <Skeleton className="h-[20px] w-[90%] mb-2" />
                                            <Skeleton className="h-[20px] w-full" />
                                        </div>
                                    </div>
                                    <div className="flex md:gap-6 mt-6">
                                        <Skeleton className="h-[60px] w-60" />
                                        <Skeleton className="h-[60px] w-60" />
                                    </div>
                                </>
                            ) : (
                                <div>
                                    <div className="flex justify-between md:mb-8 mb-6 relative">
                                        <h2 className="md:text-3xl text-2xl font-semibold md:mr-0 mr-6">{product.title}</h2>
                                        <Image
                                            src="/assets/close.svg"
                                            alt="Close"
                                            width={24}
                                            height={24}
                                            onClick={() => closeKeyAuthcode()}
                                            className="cursor-pointer md:block absolute right-0"
                                        />
                                    </div>

                                    {confirmedProducts.has(product._id) ? (
                                        <>
                                            {product.key && (
                                                <>
                                                    <div className="flex md:flex-row flex-col md:gap-8 mb-6">
                                                        <div className="mb-4 md:w-1/2 w-full">
                                                            <label className="text-base font-medium flex items-center">
                                                                <Image
                                                                    src="/assets/random-key.svg"
                                                                    alt="Random Key"
                                                                    width={20}
                                                                    height={20}
                                                                    className="mr-2"
                                                                />
                                                                Random Key
                                                            </label>
                                                            <div className="flex relative">
                                                                <input className="h-16 transition border border-white/60 focus:border-white/100 w-full p-4 font-medium outline-none bg-white/10 focus:bg-white/20 mt-2" value={product.key} readOnly />
                                                                <Image
                                                                    src="/assets/copy.svg"
                                                                    alt="Copy"
                                                                    width={20}
                                                                    height={20}
                                                                    className="absolute right-0 mt-7 mr-4"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </>
                                    ) : (
                                        <div className="flex md:flex-row flex-col md:gap-8 mb-6">
                                            <div className="mb-4 w-full max-w-96">
                                                <div className="flex relative">
                                                    <input className="h-16 transition border text-white/60 border-white/60 focus:border-white/100 w-full p-4 outline-none bg-white/10 focus:bg-white/20 mt-2" value="**********" readOnly />
                                                    <button onClick={() => setConfirmPopupView(true)} className="cursor-pointer absolute right-0 bg-[#0BC4E5] hover:bg-[#86edff] transition py-2 px-4 mt-5 mr-3 text-black font-semibold">View key</button>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    <div className="flex md:flex-row flex-col md:gap-30 gap-4 w-full">
                                        <div className="gap-2">
                                            <h4 className="text-lg font-medium">Order number</h4>
                                            {/* <p className="text-lg font-semibold text-white/60">{product.or}</p> */}
                                        </div>
                                        <div className="gap-2">
                                            <h4 className="text-lg font-medium">Order date</h4>
                                            {/* <p className="text-lg font-semibold text-white/60">{product.orderDate}</p> */}
                                        </div>
                                    </div>
                                    <div className="flex md:flex-row flex-col gap-6 mt-6">
                                        <div className="box-shape">
                                            <button className="px-10 bg-[#0BC4E5] cursor-pointer h-14 shape-outline button-product font-semibold text-[#00D8FF] gap-2">Watch video tutorial</button>
                                        </div>
                                        <div className="box-shape ">
                                            <button className="px-10 bg-[#0BC4E5] cursor-pointer h-14 shape button-product font-semibold text-black gap-2">Get Authcode</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {confirmPopupView && (
                    <div className="fixed top-0 left-0 w-full bg-black/60 h-full text-white flex justify-center items-center">
                        <div className="bg-[#30434D] clip-path-element md:w-[700px] w-full md:p-8 p-6" ref={popupRef}>
                            <div className="flex justify-between mb-6">
                                <h4 className="text-xl font-semibold">Important Information</h4>
                                <Image
                                    src="/assets/close.svg"
                                    alt="Close"
                                    width={24}
                                    height={24}
                                    onClick={() => setConfirmPopupView(false)}
                                    className="cursor-pointer"
                                />
                            </div>
                            <div className="border border-amber-300 bg-amber-300/20 md:p-6 p-4 mb-6">
                                <Image
                                    src="/assets/alert.svg"
                                    alt="Alert"
                                    width={24}
                                    height={24}
                                    className="w-6 md:mb-4 mb-2"
                                />
                                <h3 className="md:text-lg text-md font-bold mb-2">AFTER VIEWING THE INFORMATION, IT WILL NOT BE POSSIBLE TO REQUEST A REFUND FOR THE ORDER.</h3>
                                <p className="md:text-md text-sm font-semibold">Not sure if your PC meets the system requirements? Go to the product description and see the minimum and recommended requirements to run the GAME.</p>
                            </div>
                            <div className="border border-cyan-300 bg-cyan-300/20 md:p-6 p-4">
                                <Image
                                    src="/assets/streamline.svg"
                                    alt="Streamline"
                                    width={40}
                                    height={40}
                                    className="mb-4"
                                />
                                <p className="md:text-md text-sm font-semibold">The account with this game is for exclusive use on PC, via Steam, Ubisoft Connect, Rockstar Launcher, Epic Games, EA App. It will not be possible to play on CONSOLES.</p>
                            </div>
                            <div className="flex gap-6 mt-6">
                                <div className="box-shape w-full">
                                    <button onClick={() => setConfirmPopupView(false)} className="w-full bg-[#0BC4E5] cursor-pointer h-14 shape-outline button-product font-semibold text-[#00D8FF] gap-2">Back</button>
                                </div>
                                <div className="box-shape w-full">
                                    <button onClick={() => handleConfirmViewKeyButton()} className="w-full bg-[#0BC4E5] cursor-pointer h-14 shape button-product font-semibold text-black gap-2">Ok, View key</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}