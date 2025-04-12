"use client";

import { useState } from "react";
import Image from "next/image";
import UserProfile from "@/assets/dashboard/user-profile.png";
import GoogleSVG from "@/assets/dashboard/google.svg";
import { useSession } from "../providers/session";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useTranslation } from "react-i18next";
import { format } from "date-fns";
import { localeMap } from "@/lib/utils";
import { enUS } from "date-fns/locale";

const accountSchema = z.object({
    displayName: z.string().min(1),
    receiveDeals: z.boolean().optional(),
});

const passwordSchema = z.object({
    currentPassword: z.string().min(1),
    newPassword: z.string().min(6),
    confirmPassword: z.string(),
})

const emailSchema = z.object({
    newEmail: z.string().email(),
    confirmEmail: z.string().email(),
    currentPassword: z.string().min(1),
})

type AccountFormData = z.infer<typeof accountSchema>;
type PasswordFormData = z.infer<typeof passwordSchema>;
type EmailFormData = z.infer<typeof emailSchema>;
export default function Details() {
    const { session } = useSession();
    const [detailOption, setDetailOption] = useState<string>("my-account");
    const { t, i18n } = useTranslation('account')
    const {
        handleSubmit: handleAccountSubmit,
        register: registerAccount,
        formState: { errors: accountErrors },
    } = useForm<AccountFormData>({
        resolver: zodResolver(accountSchema),
        defaultValues: {
            displayName: session?.user?.username || "",
        },
    });

    const {
        handleSubmit: handlePasswordSubmit,
        register: registerPassword,
        formState: { errors: passwordErrors },
    } = useForm<PasswordFormData>({
        resolver: zodResolver(passwordSchema),
    });

    const {
        handleSubmit: handleEmailSubmit,
        register: registerEmail,
        formState: { errors: emailErrors },
    } = useForm<EmailFormData>({
        resolver: zodResolver(emailSchema),
        defaultValues: {
            newEmail: session?.user?.email || "",
        },
    });


    const tabbarAccount = [
        { id: 1, tab: "my-account", tab_name: t('details.tabs.myAccount') },
        { id: 2, tab: "change-password", tab_name: t('details.tabs.changePassword') },
        { id: 3, tab: "change-email", tab_name: t('details.tabs.changeEmail') }
    ];

    const onAccountSubmit = (data: AccountFormData) => {
        console.log("Account data:", data);
    };

    const onPasswordSubmit = (data: PasswordFormData) => {
        console.log("Password data:", data);
    };

    const onEmailSubmit = (data: EmailFormData) => {
        console.log("Email data:", data);
    };

    const renderForm = () => {
        switch (detailOption) {
            case "my-account":
                return (
                    <form onSubmit={handleAccountSubmit(onAccountSubmit)} className="max-w-xl">
                        <h3 className="md:text-xl text-lg font-semibold mb-1">{t('details.myAccount.title')}</h3>
                        <p className="text-sm text-white/60 md:mb-6 mb-4">{t('details.myAccount.subtitle')}</p>

                        <div className="mb-10">
                            <label htmlFor="display_name" className="text-base font-medium">{t('details.myAccount.displayName')}</label>
                            <input
                                id="display_name"
                                className="transition border border-white/60 focus:border-white/100 w-full p-4 font-medium outline-none focus:bg-white/10 mt-2"
                                placeholder={t('details.myAccount.displayNamePlaceholder')}
                                {...registerAccount("displayName")}
                            />
                            {accountErrors.displayName && (
                                <p className="text-red-500 text-sm mt-1">{accountErrors.displayName.message}</p>
                            )}
                        </div>

                        <div className="flex gap-2 mb-4">
                            <input
                                type="checkbox"
                                id="receiveDeals"
                                className="accent-black focus:accent-cyan-300"
                                {...registerAccount("receiveDeals")}
                            />
                            <label htmlFor="receiveDeals" className="md:text-base text-sm">
                                {t('details.myAccount.receiveDeals')}
                            </label>
                        </div>

                        <div className="box-shape">
                            <button type="submit" className="ml-auto w-full bg-[#0BC4E5] cursor-pointer h-14 shape button-product font-semibold text-black gap-2 px-10">
                                {t('details.myAccount.saveButton')}
                            </button>
                        </div>
                    </form>
                );

            case "change-password":
                return (
                    <form onSubmit={handlePasswordSubmit(onPasswordSubmit)} className="max-w-xl">
                        <h3 className="md:text-xl text-lg font-semibold mb-1">{t('details.changePassword.title')}</h3>
                        <p className="text-sm text-white/60 md:mb-6 mb-4">{t('details.changePassword.subtitle')}</p>

                        <div className="mb-4">
                            <label htmlFor="current_password" className="text-base font-medium">{t('details.changePassword.currentPassword')}</label>
                            <input
                                type="password"
                                id="current_password"
                                className="transition border border-white/60 focus:border-white/100 w-full p-4 font-medium outline-none focus:bg-white/10 mt-2"
                                placeholder={t('details.changePassword.currentPassword')}
                                {...registerPassword("currentPassword")}
                            />
                            {passwordErrors.currentPassword && (
                                <p className="text-red-500 text-sm mt-1">{passwordErrors.currentPassword.message}</p>
                            )}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="new_password" className="text-base font-medium">{t('details.changePassword.newPassword')}</label>
                            <input
                                type="password"
                                id="new_password"
                                className="transition border border-white/60 focus:border-white/100 w-full p-4 font-medium outline-none focus:bg-white/10 mt-2"
                                placeholder={t('details.changePassword.newPassword')}
                                {...registerPassword("newPassword")}
                            />
                            {passwordErrors.newPassword && (
                                <p className="text-red-500 text-sm mt-1">{passwordErrors.newPassword.message}</p>
                            )}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="confirm_password" className="text-base font-medium">{t('details.changePassword.confirmPassword')}</label>
                            <input
                                type="password"
                                id="confirm_password"
                                className="transition border border-white/60 focus:border-white/100 w-full p-4 font-medium outline-none focus:bg-white/10 mt-2"
                                placeholder={t('details.changePassword.confirmPassword')}
                                {...registerPassword("confirmPassword")}
                            />
                            {passwordErrors.confirmPassword && (
                                <p className="text-red-500 text-sm mt-1">{passwordErrors.confirmPassword.message}</p>
                            )}
                        </div>

                        <div className="box-shape">
                            <button type="submit" className="ml-auto w-full bg-[#0BC4E5] cursor-pointer h-14 shape button-product font-semibold text-black gap-2 px-10">
                                {t('details.changePassword.updateButton')}
                            </button>
                        </div>
                    </form>
                );

            case "change-email":
                return (
                    <form onSubmit={handleEmailSubmit(onEmailSubmit)} className="max-w-xl">
                        <h3 className="md:text-xl text-lg font-semibold mb-1">{t('details.changeEmail.title')}</h3>
                        <p className="text-sm text-white/60 md:mb-6 mb-4">{t('details.changeEmail.subtitle')}</p>

                        <div className="mb-4">
                            <label htmlFor="new_email" className="text-base font-medium">{t('details.changeEmail.newEmail')}</label>
                            <input
                                type="email"
                                id="new_email"
                                className="transition border border-white/60 focus:border-white/100 w-full p-4 font-medium outline-none focus:bg-white/10 mt-2"
                                placeholder={t('details.changeEmail.newEmail')}
                                {...registerEmail("newEmail")}
                            />
                            {emailErrors.newEmail && (
                                <p className="text-red-500 text-sm mt-1">{emailErrors.newEmail.message}</p>
                            )}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="confirm_email" className="text-base font-medium">{t('details.changeEmail.confirmEmail')}</label>
                            <input
                                type="email"
                                id="confirm_email"
                                className="transition border border-white/60 focus:border-white/100 w-full p-4 font-medium outline-none focus:bg-white/10 mt-2"
                                placeholder={t('details.changeEmail.confirmEmail')}
                                {...registerEmail("confirmEmail")}
                            />
                            {emailErrors.confirmEmail && (
                                <p className="text-red-500 text-sm mt-1">{emailErrors.confirmEmail.message}</p>
                            )}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="current_password_email" className="text-base font-medium">{t('details.changeEmail.currentPassword')}</label>
                            <input
                                type="password"
                                id="current_password_email"
                                className="transition border border-white/60 focus:border-white/100 w-full p-4 font-medium outline-none focus:bg-white/10 mt-2"
                                placeholder={t('details.changeEmail.currentPassword')}
                                {...registerEmail("currentPassword")}
                            />
                            {emailErrors.currentPassword && (
                                <p className="text-red-500 text-sm mt-1">{emailErrors.currentPassword.message}</p>
                            )}
                        </div>

                        <div className="box-shape">
                            <button type="submit" className="ml-auto w-full bg-[#0BC4E5] cursor-pointer h-14 shape button-product font-semibold text-black gap-2 px-10">
                                {t('details.changeEmail.updateButton')}
                            </button>
                        </div>
                    </form>
                );

            default:
                return null;
        }
    };
    console.log(i18n.language.split('-')[0])
    return (
        <div className="bg-[#41434B] clip-path-element w-full p-8 mt-10">
            <div className="flex md:flex-row flex-col md:gap-8 gap-4 w-full mb-8">
                <Image src={UserProfile} alt="" className="clip-path-images" />
                <div className="flex flex-col justify-between w-full">
                    <div className="flex md:flex-row flex-col-reverse justify-between w-full">
                        <div className="gap-2 md:mb-0 mb-4">
                            <p className="text-base font-semibold">{session?.user?.username || t('details.userSection.defaultUser')}</p>
                            <p className="text-base font-medium text-white/60">{session?.user?.email || "email@example.com"}</p>
                        </div>
                        <div className="gap-2 md:mb-0 mb-4">
                            <p className="text-base font-semibold md:text-end">{t('details.userSection.createdSince')}</p>
                            <p className="text-base font-medium text-white/60">
                                {format(new Date(session?.user?.createdAt || Date.now()), 'd MMMM yyyy', { locale: localeMap[i18n.language.split('-')[0]] || enUS })}
                            </p>
                        </div>
                    </div>
                    <button className="bg-white w-40 cursor-pointer h-10 clip-path-images shape-google button-product font-semibold text-black gap-2 flex items-center justify-center">
                        <Image src={GoogleSVG} alt="google" width={20} height={20} />
                        {t('details.userSection.googleConnected')}
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto" style={{ WebkitOverflowScrolling: "touch", scrollBehavior: "smooth" }}>
                <ul className="flex md:gap-8 gap-6 border-b-2 border-white/20 pb-[8px] md:w-full w-[400px]">
                    {tabbarAccount.map((item) => (
                        <li className="text-md font-semibold cursor-pointer" key={item.id}>
                            <div
                                className={`${detailOption === item.tab
                                    ? 'text-white underline underline-offset-14 decoration-2 decoration-[#0BC4E5]'
                                    : 'text-white/60'}`}
                                onClick={() => setDetailOption(item.tab)}
                            >
                                {item.tab_name}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex md:flex-row flex-col mt-6">
                <div className="flex-1 md:mb-0 mb-4">
                    <h2 className="text-2xl font-semibold">
                        {tabbarAccount.find(tab => tab.tab === detailOption)?.tab_name}
                    </h2>
                </div>
                <div className="flex-3">
                    {renderForm()}
                </div>
            </div>
        </div>
    );
}