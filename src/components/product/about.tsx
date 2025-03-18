'use client';

import { useState } from "react";

function AboutProduct(props: { product: Partial<Product> }) {
    const [expandedAbout, setExpandedAbout] = useState(false);

    const toggleExpand = () => {
        setExpandedAbout(!expandedAbout);
    };

    return <div className="md:p-8 p-5 backdrop-blur-md clip-path-element" style={{ background: "rgba(49, 55, 66, 0.80)" }}>
        {/* Sobre o produto */}
        <h2 className="md:text-2xl text-xl font-semibold md:mb-6 mb-2">About</h2>
        <div className="relative mb-10 ">
            <p className={`md:text-lg text-sm overflow-hidden ${expandedAbout ? "" : "line-clamp-3"}`}>Spider-Sense alert... Put on the mask for more electrifying web adventures as Marvel’s Spider-Man 2 comes to PC. Developed by Insomniac Games in collaboration with Marvel and optimized for PC by Nixxes Software. Spider-Sense alert... Put on the mask for more electrifying web adventures as Marvel’s Spider-Man 2 comes to PC. Developed by Insomniac Games in collaboration with Marvel and optimized for PC by Nixxes Software.</p>
            <span className="cursor-pointer md:text-lg text-sm underline underline-offset-4 text-[#0BC4E5] font-semibold" onClick={toggleExpand}>{expandedAbout ? "Ver menos" : "Ver mais"}</span>
        </div>

        {/* Requisitos do sistema */}
        <h2 className="md:text-2xl text-xl font-semibold mb-6">System Requirements</h2>
        <div className="md:flex md:gap-20">
            <div className="flex-1 xl:mr-20 md:mb-0 mb-6">
                <h4 className="md:text-lg text-md font-semibold uppercase mb-4">Minimum</h4>
                <ul className="flex flex-col md:gap-3 gap-2">
                    <li className="md:text-lg text-sm font-bold">OS: <span className="text-[#0BC4E5] font-semibold">Windows 10/11 (version 1909+)</span></li>
                    <li className="md:text-lg text-sm font-bold">Storage: <span className="text-[#0BC4E5] font-semibold">140 GB</span></li>
                    <li className="md:text-lg text-sm font-bold">Processor: <span className="text-[#0BC4E5] font-semibold">Intel Core i3-8100 / AMD Ryzen 3 3100</span></li>
                    <li className="md:text-lg text-sm font-bold">Memory: <span className="text-[#0BC4E5] font-semibold">16 GB</span></li>
                    <li className="md:text-lg text-sm font-bold">Graphics Card: <span className="text-[#0BC4E5] font-semibold">NVIDIA GeForce GTX 1650 / AMD Radeon RX 5500 XT</span></li>
                </ul>
            </div>
            <div className="flex-1 xl:mr-20">
                <h4 className="md:text-lg text-md font-semibold uppercase mb-4">Recommended</h4>
                <ul className="flex flex-col gap-3">
                    <li className="md:text-lg text-sm font-bold">OS: <span className="text-[#0BC4E5] font-semibold">Windows 10/11 (version 1909+)</span></li>
                    <li className="md:text-lg text-sm font-bold">Storage: <span className="text-[#0BC4E5] font-semibold">140 GB</span></li>
                    <li className="md:text-lg text-sm font-bold">Processor: <span className="text-[#0BC4E5] font-semibold">Intel Core i3-8100 / AMD Ryzen 3 3100</span></li>
                    <li className="md:text-lg text-sm font-bold">Memory: <span className="text-[#0BC4E5] font-semibold">16 GB</span></li>
                    <li className="md:text-lg text-sm font-bold">Graphics Card: <span className="text-[#0BC4E5] font-semibold">NVIDIA GeForce GTX 1650 / AMD Radeon RX 5500 XT</span></li>
                </ul>
            </div>
        </div>
    </div>
}
export { AboutProduct }