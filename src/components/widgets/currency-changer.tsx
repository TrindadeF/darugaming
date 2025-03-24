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
import { useTranslation } from "react-i18next";

export default function CurrencyChanger() {
    const [open, setOpen] = useState(false);
    const { currency, setCurrency, rates, isLoading } = useCurrency();
    const { t } = useTranslation('home');

    const handleChange = (value: Currency) => {
        setCurrency(value);
    };

    return (
        <div className="flex">
            <Button
                onClick={() => setOpen(!open)}
                className="rounded-r-none hover:cursor-pointer lg:h-[36px]"
                disabled={isLoading}
            >
                {isLoading ? <Loader2 className="animate-spin" /> : <Wallet />}
            </Button>

            <Select open={open} onOpenChange={setOpen} onValueChange={handleChange}>
                <SelectTrigger className="hidden lg:flex w-[180px] rounded-l-none">
                    <SelectValue placeholder={t(CURRENCY_NAMES[currency])} />
                </SelectTrigger>

                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>{t('currency.availableCurrencies')}</SelectLabel>
                        {Object.keys(rates).map((curr) => (
                            <SelectItem
                                key={curr}
                                value={curr}
                                disabled={!rates[curr]}
                            >
                                {t(`currency.${CURRENCY_NAMES[curr as Currency]}`)} ({curr})
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
}