'use client';

import Accordion from "../Accordion";
import Image from "next/image";

import Background01 from "@/assets/about/background-01.png";
import Background02 from "@/assets/about/background-02.png";
import WebsiteNotebookPNG from "@/assets/about/website-notebook.png";
import ImageEnjoyPNG from "@/assets/about/image-enjoy.png";

import LargeCatalogSVG from "@/assets/about/large-catalog.svg";
import SupportSVG from "@/assets/about/support.svg";
import GlobalSVG from "@/assets/about/global.svg";
import TimezoneSVG from "@/assets/about/time-zone.svg";
import CartSVG from "@/assets/about/cart.svg";
import PlaySVG from "@/assets/about/play.svg";
import InstallSVG from "@/assets/about/install.svg";
import { useTranslation } from "react-i18next";

export function AboutPage() {
    const { t } = useTranslation('about');
    return (
        <div className="container mx-auto mt-20 clip-path-element text-white" style={{ background: "rgba(49, 55, 66, 0.80)" }}>
            <div className="top-0 left-0 lg:p-20 flex lg:flex-row flex-col items-center relative">
                <Image src={Background01} alt="Descrição" className="absolute -z-10 w-full h-full top-0 left-0" />
                <div className=" p-0 text-white flex-1">
                    <Image src={WebsiteNotebookPNG} alt="Descrição" width={600} height={600} className="" />
                </div>
                <div className="lg:p-20 p-6 text-white flex-1">
                    <p className="lg:text-4xl text-2xl font-semibold pb-4">{t('welcome.title')}</p>
                    <p className="lg:text-base text-sm pb-6">{t('welcome.description')}</p>
                    <div className="box-shape">
                        <button className="bg-[#0BC4E5] cursor-pointer h-14 shape button-product font-semibold text-black gap-2 px-10">{t('welcome.button')}</button>
                    </div>
                </div>
            </div>
            <div className="bg-gray-800 lg:p-20 p-6">
                <p className="lg:text-4xl text-3xl text-center font-semibold">{t('features.title')}</p>
                <div className="lg:px-30 py-10 lg:gap-16 gap-10 text-left flex lg:flex-row flex-col">
                    <div className="flex-1">
                        <Image src={LargeCatalogSVG} alt="Large Catalog" className="mb-4" width={48} height={48} />
                        <h1 className="text-2xl bold font-medium mb-4">{t('features.items.catalog.title')}</h1>
                        <p>{t('features.items.catalog.description')}</p>
                    </div>
                    <div className="flex-1">
                        <Image src={SupportSVG} alt="Real Support" className="mb-4" width={48} height={48} />
                        <h1 className="text-2xl bold font-medium mb-4">{t('features.items.support.title')}</h1>
                        <p>{t('features.items.support.description')}</p>
                    </div>
                    <div className="flex-1">
                        <Image src={GlobalSVG} alt="Always Available" className="mb-4" width={48} height={48} />
                        <h1 className="text-2xl bold font-medium mb-4">{t('features.items.available.title')}</h1>
                        <p>{t('features.items.available.description')}</p>
                    </div>
                    <div className="flex-1">
                        <Image src={TimezoneSVG} alt="Global and Local" className="mb-4" width={48} height={48} />
                        <h1 className="text-2xl bold font-medium mb-4">{t('features.items.global.title')}</h1>
                        <p>{t('features.items.global.description')}</p>
                    </div>
                </div>
            </div>
            <div className="columns-1 text-center relative ">
                <div className="absolute -z-10 w-full h-full top-0 left-0">
                    <Image src={Background02} alt="Descrição" className="w-full h-full" />
                </div>
                <div className="text lg:p-18 p-6">
                    <h1 className="lg:text-2xl text-xl pb-2">{t('mission.subtitle')}</h1>
                    <p className="lg:text-4xl text-2xl font-semibold pb-4 text-balance">{t('mission.title')}</p>
                    <p className="lg:text-2xl text-lg font-medium text-pretty">{t('mission.description')}</p>
                </div>
            </div>
            <div className="bg-gray-800 lg:p-20 p-6">
                <p className="lg:text-4xl text-3xl text-center font-semibold">{t('work.title')}</p>
                <div className="lg:px-30 py-10 lg:gap-16 gap-10 text-left flex lg:flex-row flex-col ">
                    <div className="flex-1 text-center">
                        <Image src={CartSVG} alt="Add Games to Your Cart" className="mb-4 mx-auto" width={48} height={48} />
                        <h1 className="text-2xl bold font-medium mb-4">{t('work.steps.cart.title')}</h1>
                        <p>{t('work.steps.cart.description')}</p>
                    </div>
                    <div className="flex-1 text-center">
                        <Image src={PlaySVG} alt="Access Your Games" className="mb-4 mx-auto" width={48} height={48} />
                        <h1 className="text-2xl bold font-medium mb-4">{t('work.steps.access.title')}</h1>
                        <p>{t('work.steps.access.description')}</p>
                    </div>
                    <div className="flex-1 text-center">
                        <Image src={InstallSVG} alt="Install and Play" className="mb-4 mx-auto" width={48} height={48} />
                        <h1 className="text-2xl bold font-medium mb-4">{t('work.steps.install.title')}</h1>
                        <p>{t('work.steps.install.description')}</p>
                    </div>
                </div>
            </div>
            <div className="top-0 left-0 flex lg:flex-row flex-col items-center relative">
                <Image src={Background01} alt="Descrição" className="absolute -z-10 w-full h-full top-0 left-0" />
                <div className=" p-0 text-white flex-1">
                    <Image src={ImageEnjoyPNG} alt="Descrição" width={600} height={600} className="" />
                </div>
                <div className=" lg:p-20 p-8 text-white flex-1">
                    <p className="lg:text-4xl text-2xl font-semibold pb-4">{t('enjoy.title')}</p>
                    <p className="text pb-6">{t('enjoy.account')}</p>
                    <div className="box-shape">
                        <button className="bg-[#0BC4E5] cursor-pointer h-14 shape button-product font-semibold text-black gap-2 px-10">{t('enjoy.button')}</button>
                    </div>
                </div>
            </div>
            <div className="bg-gray-800 lg:p-20 p-6">
                <p className="lg:text-4xl text-3xl text-center font-semibold mb-10">{t('faq.title')}</p>
                <Accordion />
            </div>
        </div>
    )
}