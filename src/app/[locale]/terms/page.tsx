'use client';

import { useTranslation } from "react-i18next";



export default function PrivacyPolicyPage() {
    const { t } = useTranslation('terms');

    return (
        <div className="md:w-[1100px] w-full container mx-auto mt-20 relative text-white py-6">
            <div className="md:p-10 p-5 backdrop-blur-md clip-path-element gap-1" style={{ background: "rgba(49, 55, 66, 0.80)" }}>
                <h1 className="text-4xl font-bold mb-3 text-indigo-400">{t('privacyPolicy.title')}</h1>
                <p className="text-gray-300 text-sm mb-8">{t('privacyPolicy.lastUpdated')}</p>

                <p className="mb-6 leading-relaxed">{t('privacyPolicy.introduction.p1')}</p>
                <p className="mb-6 leading-relaxed">
                    {t('privacyPolicy.introduction.p2', {
                        components: [<a href="https://www.privacypolicies.com/privacy-policy-generator/" target="_blank" className="hover:underline" key="0" />]
                    })}
                </p>

                <h2 className="text-2xl font-semibold mt-10 mb-5 border-b border-gray-600 pb-3">
                    {t('privacyPolicy.interpretation.title')}
                </h2>

                <h3 className="text-xl font-medium mb-4 text-gray-200">{t('privacyPolicy.interpretation.interpretationSection')}</h3>
                <p className="mb-5">{t('privacyPolicy.interpretation.definitionsText')}</p>

                <h3 className="text-xl font-medium mb-4 text-gray-200">{t('privacyPolicy.interpretation.definitionsSection')}</h3>
                <p className="mb-5">{t('privacyPolicy.interpretation.purposeText')}</p>

                <ul className="space-y-5 mb-10">
                    {Object.entries(t('privacyPolicy.interpretation.list', { returnObjects: true })).map(([key, item]: [string, any]) => (
                        <li key={key}>
                            <strong className="block mb-1">{item.title}</strong>
                            <p>
                                {key === 'website' ?
                                    t(`privacyPolicy.interpretation.list.${key}.description`, {
                                        components: [<a href="test" rel="external nofollow noopener" target="_blank" className="hover:underline" key="0" />]
                                    }) :
                                    item.description
                                }
                            </p>
                        </li>
                    ))}
                </ul>

                <h2 className="text-2xl font-semibold mt-10 mb-5 border-b border-gray-600 pb-3">
                    {t('privacyPolicy.collectingData.title')}
                </h2>

                <h3 className="text-xl font-medium mb-4 text-gray-200">{t('privacyPolicy.collectingData.typesData.title')}</h3>

                <h4 className="text-lg font-medium mb-3 text-gray-200">{t('privacyPolicy.collectingData.typesData.personalData.title')}</h4>
                <p className="mb-5">{t('privacyPolicy.collectingData.typesData.personalData.description')}</p>

                <ul className="space-y-3 mb-6">
                    {Object.values(t('privacyPolicy.collectingData.typesData.personalData.list', { returnObjects: true }) || {}).map((item: string, index: number) => (
                        <li className="ml-4" key={index}>{item}</li>
                    ))}
                </ul>

                <h4 className="text-lg font-medium mb-3 text-gray-200">{t('privacyPolicy.collectingData.typesData.usageData.title')}</h4>
                <p className="mb-5">{t('privacyPolicy.collectingData.typesData.usageData.description1')}</p>
                <p className="mb-5">{t('privacyPolicy.collectingData.typesData.usageData.description2')}</p>
                <p className="mb-5">{t('privacyPolicy.collectingData.typesData.usageData.description3')}</p>
                <p className="mb-8">{t('privacyPolicy.collectingData.typesData.usageData.description4')}</p>

                <h4 className="text-lg font-medium mb-3 text-gray-200">{t('privacyPolicy.collectingData.typesData.tracking.title')}</h4>
                <p className="mb-5">{t('privacyPolicy.collectingData.typesData.tracking.description1')}</p>

                <ul className="space-y-4 mb-6">
                    <li>
                        <strong>{t('privacyPolicy.collectingData.typesData.tracking.list.cookies.title')}</strong>
                        <p>{t('privacyPolicy.collectingData.typesData.tracking.list.cookies.description')}</p>
                    </li>
                    <li>
                        <strong>{t('privacyPolicy.collectingData.typesData.tracking.list.webBeacons.title')}</strong>
                        <p>{t('privacyPolicy.collectingData.typesData.tracking.list.webBeacons.description')}</p>
                    </li>
                </ul>

                <p className="mb-8">
                    {t('privacyPolicy.collectingData.typesData.tracking.cookieTypes.description1', {
                        components: [<a href="https://www.privacypolicies.com/blog/privacy-policy-template/#Use_Of_Cookies_Log_Files_And_Tracking" target="_blank" className="hover:underline" key="0" />]
                    })}
                </p>
                <p className="mb-5">{t('privacyPolicy.collectingData.typesData.tracking.cookieTypes.description2')}</p>

                <ul className="space-y-6 mb-10">
                    {Object.entries(t('privacyPolicy.collectingData.typesData.tracking.cookieTypes.types', { returnObjects: true })).map(([key, item]: [string, any]) => (
                        <li key={key}>
                            <strong className="block mb-2">{item.title}</strong>
                            <p>{item.type}</p>
                            <p>{item.administered}</p>
                            <p>{item.purpose}</p>
                        </li>
                    ))}
                </ul>

                <h2 className="text-2xl font-semibold mt-10 mb-5 border-b border-gray-600 pb-3">
                    {t('privacyPolicy.contact.title')}
                </h2>
                <p className="mb-4">{t('privacyPolicy.contact.description')}</p>
                <ul className="space-y-2">
                    <li className="flex items-center">
                        {t('privacyPolicy.contact.phone')}
                    </li>
                </ul>
            </div>
        </div>
    );
}