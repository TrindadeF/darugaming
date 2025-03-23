"use client"

import { createContext, useContext, useState, useEffect } from 'react'

type FontContextType = {
    font: string
    setFont: React.Dispatch<React.SetStateAction<string>>;
}

const FontContext = createContext<FontContextType | undefined>(undefined)

export function FontProvider({ children, defaultFont }: { children: React.ReactNode; defaultFont: string }) {
    const [font, setFont] = useState(defaultFont)

    useEffect(() => {
        document.documentElement.className = font
        localStorage.setItem('font', font)
    }, [font])

    return (
        <FontContext.Provider value={{ font, setFont }}>
            {children}
        </FontContext.Provider>
    )
}

export function useFont() {
    const context = useContext(FontContext)
    if (!context) {
        throw new Error('useFont must be used within a FontProvider')
    }
    return context
}