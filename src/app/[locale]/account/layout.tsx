import Tabbar from "@/components/external/Tabbar"
import React from "react"

export default function Layout(props: { children: React.ReactNode }) {

    return (
        <div className="md:w-[1100px] w-full container mx-auto mt-20  relative text-white py-6">
            <div className="md:p-10 p-5 backdrop-blur-md clip-path-element" style={{ background: "rgba(49, 55, 66, 0.80)" }}>
                <Tabbar />
                <div className="flex flex-col gap-6 mt-6">
                    {props.children}
                </div>
            </div>
        </div>
    )
}