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
export function formatCurrency(amount: number, currency = "BRL") {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency,
  }).format(amount)
}

export function getOrderStatus(status: number) {
  const statusMap: Record<number, string> = {
    0: "Pendente",
    1: "Processando",
    2: "Completo",
    3: "Cancelado",
    4: "Reembolsado"
  }
  return statusMap[status] || "Desconhecido"
}
