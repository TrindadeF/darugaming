import { encode } from "@/lib/auth/server-session";
import { SESSION_COOKIE_MAX_AGE, SESSION_COOKIE_NAME } from "@/lib/auth/helper";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function GoogleCallbackPage({
    params,
    searchParams,
}: {
    params: Promise<{ locale: string }>;
    searchParams: Promise<{ data?: string }>;
}) {
    const { locale } = await params;
    const { data } = await searchParams;

    const parsedData = data ? JSON.parse(decodeURIComponent(data)) : null;

    if (!parsedData || !parsedData.accessToken) {
        redirect(`${locale}/auth/error`);
    }

    const session = await encode(parsedData);
    (await cookies()).set(SESSION_COOKIE_NAME, session, {
        httpOnly: true,
        secure: true,
        expires: new Date(Date.now() + SESSION_COOKIE_MAX_AGE),
        sameSite: "lax",
        path: "/",
    });

    redirect(`/${locale}`);
}
