import { mockItem } from "@/stories/cart.stories";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
) {
    const slug = (await params).slug;
    console.log(request, slug)

    return NextResponse.json(
        mockItem[0],
        { status: 200 }
    );
}