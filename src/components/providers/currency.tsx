"use client";
import { createContext, useContext, useEffect, useState } from "react";

export type Currency = 'USD' | 'BRL' | 'EUR';

interface CurrencyContextProps {
    currency: Currency;
    setCurrency: React.Dispatch<React.SetStateAction<Currency>>;
    rates: Record<string, number>;
    isLoading: boolean;
    error: string | null;
}

export const CurrencyContext = createContext<CurrencyContextProps | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currency, setCurrency] = useState<Currency>('USD');
    const [rates, setRates] = useState<Record<string, number>>({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await fetch(`/api/exchange`);
                if (!response.ok) throw new Error('Failed to fetch rates');
                const data = await response.json();
                setRates(data.rates);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to fetch rates');
            } finally {
                setIsLoading(false);
            }
        };

        fetchRates();
    }, []);

    return (
        <CurrencyContext.Provider value={{ currency, setCurrency, rates, isLoading, error }}>
            {children}
        </CurrencyContext.Provider>
    );
};

export const useCurrency = () => {
    const context = useContext(CurrencyContext);
    if (!context) {
        throw new Error("useCurrency deve ser usado dentro de um CurrencyProvider");
    }
    return context;
};