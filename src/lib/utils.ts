import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Locale } from 'date-fns';
import { enUS, ptBR } from 'date-fns/locale';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const localeMap: { [key: string]: Locale } = {
  en: enUS,
  br: ptBR,
};