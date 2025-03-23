'use client';

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";


import CurrencyChanger from "./currency-changer";
import LanguageChanger from "../language-changer";
import { GlobalSearch } from "./global-search";
import { UserNav } from "../account/user";
import { usePathname } from "next/navigation";

function NavMenu() {
    const pathname = usePathname()
    if (pathname.includes('signin') || pathname.includes('signout')) return null
    return (
        <NavigationMenu className="max-w-full ">
            <NavigationMenuList className="grid grid-cols-3 items-center w-full px-4 p-1 bg-transparent">
                <div className="flex lg:gap-2 justify-self-start">
                    <NavigationMenuItem>
                        <CurrencyChanger />
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <LanguageChanger />
                    </NavigationMenuItem>
                </div>
                <NavigationMenuItem className="justify-self-center">
                    <GlobalSearch />
                </NavigationMenuItem>


                <NavigationMenuItem className="justify-self-end">
                    <UserNav />
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

export { NavMenu }