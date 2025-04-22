"use client";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import logo from '@/assets/logo.png'
import Link from "next/link";
import Image from "next/image";
function MainNav() {
    const pathname = usePathname();
    if (pathname.includes("signin") || pathname.includes("signup") || pathname.includes('admin')) return null;

    return (
        <div className="relative h-16 bg-background border-b border-[#0bc4e5]">
            {/* Container da seta - Altura reduzida */}
            <div className="z-20 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full
                before:absolute before:left-1/2 before:-translate-x-1/2
                before:border-l-[70px] before:border-r-[70px] before:border-t-[40px] {/* Altura reduzida */}
                before:border-transparent before:border-t-[#0bc4e5]">

                {/* Borda interna ajustada */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-[1px]
                    border-l-[69px] border-r-[69px] border-t-[39px] {/* Ajuste fino */}
                    border-transparent border-t-background" />
            </div>
            <NavigationMenu className="w-full relative h-20 bg-transparent z-20">
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center z-20 pointer-events-none">
                    <Image
                        src={logo.src}
                        alt="Logo"
                        width={75}
                        height={75}
                        className="mx-auto"
                    />
                </div>
                <NavigationMenuList className="flex items-center justify-between md:justify-evenly w-screen px-4 h-full z-10">
                    <div className="flex gap-4">
                        <NavigationMenuItem asChild>
                            <Link href="/" className="hover:text-[#0bc4e5] transition">Home</Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem asChild>
                            <Link href="/contact" className="hover:text-[#0bc4e5] transition">Contato</Link>
                        </NavigationMenuItem>
                    </div>

                    <div className="flex gap-4">
                        <NavigationMenuItem asChild>
                            <Link href="/products" className="hover:text-[#0bc4e5] transition">Games</Link>
                        </NavigationMenuItem>
                    </div>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}

export { MainNav };
