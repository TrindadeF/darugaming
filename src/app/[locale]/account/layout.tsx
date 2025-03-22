import { Metadata } from "next"
import { Separator } from "@/components/ui/separator"
import { SidebarNav } from "@/components/account/side-nav"
import i18nConfig from "@/i18nConfig";
import { notFound } from "next/navigation";
import initTranslations from "@/app/i18n";

export const metadata: Metadata = {
    title: "Account",
    description: "",
}

interface SettingsLayoutProps {
    children: React.ReactNode
    params: Promise<{ locale: string }>;
}

const i18nNamespaces = ['account']

export default async function SettingsLayout({ children, params }: SettingsLayoutProps) {
    const { locale } = await params;
    if (!i18nConfig.locales.includes(locale)) {
        notFound();
    }
    const { t } = await initTranslations(locale, i18nNamespaces);
    const sidebarNavItems = [
        {
            title: t('layout.sidebar.profile'),
            href: "/account",
        },
        {
            title: t('layout.sidebar.orders'),
            href: "/account/orders",
        },
        {
            title: t('layout.sidebar.billings'),
            href: "/account/billing",
        },
    ]

    return (
        <div className="space-y-6 p-4 lg:p-10 pb-16 md:block">
            <div className="space-y-0.5">
                <h2 className="text-2xl font-bold tracking-tight">{t('layout.heading')}</h2>
                <p className="text-muted-foreground">
                    {t('layout.description')}
                </p>
            </div>
            <Separator className="my-6" />
            <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
                <aside className="-mx-3 lg:w-1/5">
                    <SidebarNav items={sidebarNavItems} />
                </aside>
                <div className="flex-1 lg:max-w-2xl">{children}</div>
            </div>
        </div>
    )
}