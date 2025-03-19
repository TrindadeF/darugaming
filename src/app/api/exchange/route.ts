import { NextResponse } from "next/server";
import { fetchExchangeRates } from "@/lib/currency";

export const revalidate = 86400;

export async function GET() {
    try {
        const rates = await fetchExchangeRates();
        return NextResponse.json({ rates });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch exchange rates" },
            { status: 500 }
        );
    }
}