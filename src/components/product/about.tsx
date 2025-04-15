'use client';

import { useState } from "react";
import { useTranslation } from 'react-i18next';

function AboutProduct(props: { product: Partial<Product> }) {
    const { product } = props;
    const [expandedAbout, setExpandedAbout] = useState(false);
    const { t } = useTranslation('product');

    const toggleExpand = () => {
        setExpandedAbout(!expandedAbout);
    };

    const minimumReq = product.systemRequirements?.minimum;
    const recommendedReq = product.systemRequirements?.recommended;

    return (
        <div className="md:p-8 p-5 backdrop-blur-md clip-path-element" style={{ background: "rgba(49, 55, 66, 0.80)" }}>
            {/* Sobre o produto */}
            <h2 className="md:text-2xl text-xl font-semibold md:mb-6 mb-2">
                {t('about.title')}
            </h2>
            <div className="relative mb-10">
                <p className={`md:text-lg text-sm overflow-hidden ${expandedAbout ? "" : "line-clamp-3"}`}>
                    {product.description || t('about.noDescription')}
                </p>
                <span
                    className="cursor-pointer md:text-lg text-sm underline underline-offset-4 text-[#0BC4E5] font-semibold"
                    onClick={toggleExpand}
                >
                    {expandedAbout ? t('about.seeLess') : t('about.seeMore')}
                </span>
            </div>

            {/* Requisitos do sistema */}
            <h2 className="md:text-2xl text-xl font-semibold mb-6">
                {t('requirements.title')}
            </h2>
            <div className="md:flex md:gap-20">
                <div className="flex-1 xl:mr-20 md:mb-0 mb-6">
                    <h4 className="md:text-lg text-md font-semibold uppercase mb-4">
                        {t('requirements.minimum')}
                    </h4>
                    <ul className="flex flex-col md:gap-3 gap-2">
                        {Object.entries({
                            os: minimumReq?.os,
                            storage: minimumReq?.storage,
                            processor: minimumReq?.processor,
                            memory: minimumReq?.memory,
                            graphicsCard: minimumReq?.graphicsCard
                        }).map(([key, value]) => (
                            <li key={key} className="md:text-lg text-sm font-bold">
                                {t(`requirements.${key}`)}: <span className="text-[#0BC4E5] font-semibold">{value || t('requirements.notAvailable')}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex-1 xl:mr-20">
                    <h4 className="md:text-lg text-md font-semibold uppercase mb-4">
                        {t('requirements.recommended')}
                    </h4>
                    <ul className="flex flex-col gap-3">
                        {Object.entries({
                            os: recommendedReq?.os,
                            storage: recommendedReq?.storage,
                            processor: recommendedReq?.processor,
                            memory: recommendedReq?.memory,
                            graphicsCard: recommendedReq?.graphicsCard
                        }).map(([key, value]) => (
                            <li key={key} className="md:text-lg text-sm font-bold">
                                {t(`requirements.${key}`)}: <span className="text-[#0BC4E5] font-semibold">{value || t('requirements.notAvailable')}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export { AboutProduct };