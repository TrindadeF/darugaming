import { NextResponse } from "next/server";
import { GetItem as fetchExchangeRates } from "@/lib/currency";
import { CURRENCY_NAMES } from "@/lib/helper";


export async function GET() {
    try {
        const rates = await fetchExchangeRates();
        const filteredRates = (Object.keys(CURRENCY_NAMES) as Array<keyof typeof CURRENCY_NAMES>).reduce((acc, currencyCode) => {
            if (rates[currencyCode]) {
                acc[currencyCode] = rates[currencyCode];
            }
            return acc;
        }, {} as Record<keyof typeof CURRENCY_NAMES, number>);



        return NextResponse.json({ rates: filteredRates });

    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch exchange rates" },
            { status: 500 }
        );
    }
}