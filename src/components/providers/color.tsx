"use client";
import { createContext, useContext, useEffect, useState } from "react";


interface ThemeContextProps {
    color: string;
    setColor: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [color, setColor] = useState<string>('#000000');



    return (
        <ThemeContext.Provider value={{ color, setColor }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useColor = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useColor deve ser usado dentro de um ThemeProvider");
    }
    return context;
};