'use client';

import { z } from 'zod';


import { useTranslation } from 'react-i18next';
import { zodI18nMap } from '@/lib/zodI18n';

export function ZodProvider({ children }: { children: React.ReactNode }) {
    const { t } = useTranslation('form');
    z.setErrorMap(zodI18nMap(t));
    return <>{children}</>;
}