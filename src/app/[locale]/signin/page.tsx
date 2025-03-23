'use client';
import { AuthFooter } from "@/components/auth/footer";

import { SignIn } from "@/components/auth/signin";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function Page() {

    return (
        <div className="grid min-h-svh lg:grid-cols-2">
            <div className="flex flex-col gap-4 p-6 md:p-10">
                <div className="flex justify-center gap-2 md:justify-start">

                </div>
                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-md">
                        <Link className="mt-10 w-fit text-zinc-950 dark:text-white" href="/">
                            <div className="flex w-fit items-center lg:pl-0 lg:pt-0 xl:pt-0">
                                <ChevronLeft className="mr-3 h-[13px] w-[8px] text-zinc-950 dark:text-white" />
                                <p className="ml-0 text-sm text-zinc-950 dark:text-white">
                                    Back to the website
                                </p>
                            </div>
                        </Link>
                        <SignIn />
                    </div>
                </div>
                <AuthFooter />
            </div>
            <div className="relative hidden bg-muted lg:block">
                <img
                    src="/placeholder.svg"
                    alt="Image"
                    className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
            </div>
        </div>
    )
}