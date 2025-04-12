"use client"

import * as React from "react"
import { useEffect, useState } from "react"
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

import { useColor } from "../providers/color"

const banners = [
    {
        image: "https://assetsio.gnwcdn.com/RED_Vertical_ColorBlackACSH_logo_vertical_13052024_6PM_CEST.jpg?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
        color: "#8c00ff",
    },
    {
        image: "https://i.postimg.cc/px2S9P0Q/banner.png",
        color: "#005eff",
    },
    {
        image: "https://www.robin-noorda.com/uploads/1/6/8/3/16830688/3347022_orig.jpg",
        color: "#338cff",
    },
]

export function HeroCarousel() {
    const [api, setApi] = useState<CarouselApi>()
    const plugin = React.useRef(Autoplay({ delay: 5000, stopOnInteraction: false }))
    const { setColor } = useColor()
    useEffect(() => {
        if (!api) return console.log('erro')

        const handleSelect = () => {
            const index = api.selectedScrollSnap()
            const newColor = banners[index]?.color || ''
            setColor(newColor)

        }

        api.on("select", handleSelect)

        return () => {
            api.off("select", handleSelect)
        }
    }, [api])

    return (
        <div
            className="relative h-[500px] w-full transition-colors duration-1000 max-w-screen"
        >
            <div className="relative mx-auto max-w-7xl px-4 h-full">
                <Carousel
                    plugins={[plugin.current]}
                    className="h-full w-full"

                    setApi={setApi}
                    opts={{
                        loop: true,
                    }}
                >
                    <CarouselContent className="h-[500px]" >
                        {banners.map((banner, index) => (
                            <CarouselItem key={index}>
                                <div className={`relative h-full w-full flex items-center justify-center ${banner.color}`}>
                                    {/* <img
                                        src={banner.image}
                                        alt={`Banner ${index + 1}`}
                                        className="h-full w-full object-contain rounded-xl"
                                    /> */}
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>


                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                </Carousel>
            </div>
        </div>
    )
}
