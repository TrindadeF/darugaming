
'use client';

import { AuthFooter } from "@/components/auth/footer";

import { SignIn } from "@/components/auth/signin";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import Image from 'next/image';
import ImageBG from '@/assets/authbg.png'
import Logo from '@/assets/logo.png'


import { useTranslation } from "react-i18next";



const i18nNamespaces = ['auth'];


export default function Page() {

    const { t } = useTranslation(i18nNamespaces)
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
                                    {t('backLink')}
                                </p>
                            </div>
                        </Link>
                        <SignIn />
                    </div>
                </div>
                <AuthFooter />
            </div>
            <div className="relative hidden lg:block flex flex-col bg-black">
                <Image
                    fill
                    src={ImageBG.src}
                    alt={t('alt.background')}
                    className="z-0 object-cover"
                />

                <div className="relative z-10 h-full flex flex-col">
                    <div className="pl-48 pt-10 relative">
                        <Image
                            src={Logo.src}
                            width={Logo.width}
                            height={Logo.height}
                            alt={t('alt.logo')}
                        />
                    </div>
                    <div className="w-full flex flex-col items-center justify-center w-full">
                        <h1 className="text-5xl font-extrabold text-white mb-4">
                            {t('welcome')} <span className="text-blue-600">DARU GAMING</span>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}