import { encode } from "@/lib/auth/server-session";
import { SESSION_COOKIE_MAX_AGE, SESSION_COOKIE_NAME } from "@/lib/auth/helper";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function GoogleCallbackPage({
    searchParams,
}: {
    searchParams: { data?: string };
}) {
    const data = searchParams.data ? JSON.parse(decodeURIComponent(searchParams.data)) : null;

    if (!data || !data.accessToken) {
        redirect("/[locale]/auth/error");
    }

    const session = await encode(data);
    (await cookies()).set(SESSION_COOKIE_NAME, session, {
        httpOnly: true,
        secure: true,
        expires: new Date(Date.now() + SESSION_COOKIE_MAX_AGE),
        sameSite: "lax",
        path: "/",
    });

    redirect("/[locale]/");
}