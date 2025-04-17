'use client'

import '@/app/[locale]/globals.css'
import { NotFound as NotFoundUi, Illustration } from "@/components/ui/not-found"

export default function NotFound() {
    return (
        <div className="relative flex flex-col w-full items-center justify-center min-h-svh bg-background p-6 md:p-10">
            <div className="relative max-w-5xl flex items-center justify-center mx-auto w-full">
                <Illustration className="absolute inset-0 w-full h-[50vh] opacity-[0.04] dark:opacity-[0.03] text-foreground" />
                <NotFoundUi
                    title="Page not found"
                    description="Lost, this page is. In another system, it may be."
                />
            </div>
        </div>
    )
}


