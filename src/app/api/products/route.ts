import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:1337';
        const backendUrl = baseUrl + '/api/products/';

        const response = await fetch(backendUrl, {
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const products = await response.json();

        // products é um array, adapte para o formato esperado
        return NextResponse.json({
            products: Array.isArray(products) ? products : [],
            trending: [],
            bestSales: [],
            preOrder: []
        });
    } catch (error) {
        console.error('Error fetching products:', error);
        return NextResponse.json({ 
            products: [],
            trending: [],
            bestSales: [],
            preOrder: []
        }, { status: 200 });
    }
}