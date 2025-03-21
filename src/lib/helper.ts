import { format } from "date-fns";
import { enUS, fr, de, es, pt, ru, ja, ko, zhCN } from "date-fns/locale";
export const LANGUAGE_MAP = {
  br: "Português",
  en: "Inglês",
} as const;

export const CURRENCY_NAMES = {
  USD: "Dólar Americano",
  BRL: "Real Brasileiro",
  EUR: "Euro",
} as const;

export const languages = [
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Spanish", value: "es" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "ko" },
  { label: "Chinese", value: "zh" },
] as const



const locales: Record<string, Locale> = {
  en: enUS,
  fr,
  de,
  es,
  pt,
  ru,
  ja,
  ko,
  zh: zhCN,
};

export const formatDate = (date: Date, lang: string, formatStr = "PPPP") => {
  const locale = locales[lang] || enUS; // Default para inglês se a língua não for encontrada
  return format(date, formatStr, { locale });
};