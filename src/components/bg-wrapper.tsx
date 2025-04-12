"use client"
import { useColor } from "./providers/color"
import backgroundStars from "@/assets/background-stars.png"
import Image from "next/image"

export function BackgroundWrapper({ children }: { children: React.ReactNode }) {
    const { color } = useColor()

    return (
        <div className="relative w-full flex flex-col items-center justify-center ">
            <Image
                src={backgroundStars}
                alt="Background stars"
                fill
                priority
                quality={100}
                className="object-cover z-0"
            />

            <div
                className="absolute inset-0 z-10 "
                style={{
                    backgroundColor: `${color}CC`,
                    mixBlendMode: "multiply",
                    transition: "background-color 0.3s ease"
                }}
            />

            <div className="relative z-20 max-w-screen overflow-hidden">
                {children}
            </div>
        </div>
    )
}