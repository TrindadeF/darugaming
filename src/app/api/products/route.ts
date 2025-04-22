import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // Necessário para evitar cache

export async function GET() {
    try {
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL + '/products';

        const response = await fetch(backendUrl, {
            headers: {
                'Content-Type': 'application/json',
                // Adicione headers de autenticação se necessário
                // 'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error(`Backend returned status ${response.status}`);
        }

        const products = await response.json();

        return NextResponse.json(products, {
            status: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Cache-Control': 'no-store, max-age=0'
            }
        });

    } catch (error) {
        console.error('Error fetching products:', error);
        return NextResponse.json(
            { error: 'Failed to fetch products' },
            { status: 500 }
        );
    }
}