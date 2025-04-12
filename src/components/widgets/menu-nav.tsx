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
import { Cart } from "../ui/cart";

function NavMenu() {
    const pathname = usePathname();
    if (pathname.includes('signin') || pathname.includes('signup')) return null;

    return (
        <NavigationMenu className="max-w-full bg-background py-2">
            <NavigationMenuList className="flex items-center justify-center w-full md:gap-10">
                {/* Esquerda */}
                <div className="flex items-center lg:gap-2">
                    <NavigationMenuItem>
                        <CurrencyChanger />
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <LanguageChanger />
                    </NavigationMenuItem>
                </div>

                {/* Barra de pesquisa */}
                <NavigationMenuItem className="flex-1 flex justify-center">
                    <GlobalSearch />
                </NavigationMenuItem>

                {/* Direita */}
                <div className="flex items-center gap-2">
                    <NavigationMenuItem>
                        <Cart />
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <UserNav />
                    </NavigationMenuItem>
                </div>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

export { NavMenu };
