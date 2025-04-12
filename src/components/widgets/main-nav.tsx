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
    if (pathname.includes("signin") || pathname.includes("signup")) return null;

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

            <NavigationMenu className="max-w-full min-w-screen relative h-20 bg-transparent z-20 ">
                <NavigationMenuList className="grid grid-cols-3 items-center w-full px-4 p-1 bg-transparent">

                    <div className="flex gap-2 justify-self-start">
                        <NavigationMenuItem asChild>
                            <Link href="/link1" className="hover:text-[#0bc4e5] transition">
                                Link 1
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem asChild>
                            <Link href="/link2" className="hover:text-[#0bc4e5] transition">
                                Link 2
                            </Link>
                        </NavigationMenuItem>
                    </div>
                    <NavigationMenuItem className="justify-self-center" >
                        <Link href="/" className="block">
                            <Image
                                src={logo.src}
                                alt="logo"
                                width={75}
                                height={75}
                                className="mx-auto"
                            />
                        </Link>
                    </NavigationMenuItem>
                    <div className="flex gap-2 justify-self-end">
                        <NavigationMenuItem asChild>
                            <Link href="/link3" className="hover:text-[#0bc4e5] transition">
                                Link 3
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem asChild>
                            <Link href="/link3" className="hover:text-[#0bc4e5] transition">
                                Link 4
                            </Link>
                        </NavigationMenuItem>
                    </div>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}

export { MainNav };
