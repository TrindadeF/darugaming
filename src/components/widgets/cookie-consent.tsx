'use client';

import { Banner } from "@/components/ui/banner";
import { Button } from "@/components/ui/button";
import { cookies } from 'next/headers';


function CookieConsent(props: { handleCookieConsent: (consent: string) => void }) {



    return (
        <Banner rounded="default" className="shadow-lg shadow-black/5">
            <div className="w-full">
                <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
                    <p className="text-sm">
                        We use cookies to improve your experience, analyze site usage, and show personalized content.
                    </p>
                    <div className="flex shrink-0 gap-2 max-md:flex-wrap">
                        <form action={() => props.handleCookieConsent('all')}>
                            <Button type="submit" size="sm">Accept</Button>
                        </form>
                        <form action={() => props.handleCookieConsent('assencial')}>
                            <Button type="submit" variant="outline" size="sm">Use only essentials</Button>
                        </form>
                    </div>
                </div>
            </div>
        </Banner>

    );
}

export { CookieConsent };