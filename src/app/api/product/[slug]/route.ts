import { NextRequest, NextResponse } from "next/server";

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
) {
    const slug = (await params).slug;
    console.log(request, slug)

    return NextResponse.json(
        {},
        { status: 200 }
    );
}