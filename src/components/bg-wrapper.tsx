"use client"

import { useColor } from "./providers/color"

import backgroundStars from "@/assets/background-stars.png"

export function BackgroundWrapper({ children }: { children: React.ReactNode }) {
    const { color } = useColor()
    // return (
    //     <div
    //         className="relative h-screen w-full transition-all duration-1000"
    //         style={{ backgroundColor: color }}
    //     >
    //         {children}
    //     </div>
    // )
    return (
        <div
            className="relative h-screen w-full fixed transition-all duration-1000"
            style={{
                background: `
          linear-gradient(
            to bottom,
            ${color}33 0%,
            ${color}cc 50%,
            ${color}ff 100%
          ),
        url(${backgroundStars.src})
        `,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            {children}
        </div>
    )
}