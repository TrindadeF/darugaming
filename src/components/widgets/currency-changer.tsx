"use client";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Loader2, Wallet } from "lucide-react";
import { useState } from "react";
import { Currency, useCurrency } from "../providers/currency";
import { CURRENCY_NAMES } from "@/lib/helper";



export default function CurrencyChanger() {
    const [open, setOpen] = useState(false);
    const { currency, setCurrency, rates, isLoading } = useCurrency();

    const handleChange = (value: Currency) => {
        setCurrency(value);
    };

    return (
        <div className="flex">
            <Button
                onClick={() => setOpen(!open)}
                className="rounded-r-none hover:cursor-pointer"
                disabled={isLoading}
            >
                {isLoading ? <Loader2 className="animate-spin" /> : <Wallet />}
            </Button>

            <Select open={open} onOpenChange={setOpen} onValueChange={handleChange}>
                <SelectTrigger className="w-[180px] rounded-l-none">
                    <SelectValue placeholder={CURRENCY_NAMES[currency]} />
                </SelectTrigger>

                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Moedas Disponíveis</SelectLabel>
                        {Object.keys(rates).map((curr) => (
                            <SelectItem
                                key={curr}
                                value={curr}
                                disabled={!rates[curr]}
                            >
                                {CURRENCY_NAMES[curr as Currency]} ({curr})
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
}