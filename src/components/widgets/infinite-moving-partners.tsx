"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

function InfiniteMovingPartners() {
    return (
        <div className=" rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
                items={items}
                direction="right"
                speed="normal"
            />
        </div>
    );
}


export { InfiniteMovingPartners }

const items = [
    {
        icon: <img src="/icons/ea-games.svg" alt="EA Games" />,
        name: "EA Games",
        href: "#",
    },
    {
        icon: <img src="/icons/steam.svg" alt="Steam" />,
        name: "Steam",
        href: "#",
    },
    {
        icon: <img src="/icons/games-for-rent.svg" alt="Games For Rent" />,
        name: "Games For Rent",
        href: "#",
    },
    {
        icon: <img src="/icons/pre-sale-products.svg" alt="Pre-Sale Products" />,
        name: "Pre-Sale Products",
        href: "#",
    },
    {
        icon: <img src="/icons/xbox-game-studios.svg" alt="Xbox Game Studios" />,
        name: "Xbox Game Studios",
        href: "#",
    },
    {
        icon: <img src="/icons/ubisoft.svg" alt="Ubisoft" />,
        name: "Ubisoft",
        href: "#",
    },
];
