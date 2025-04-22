"use client";

import { createContext, useContext, useState, useEffect } from "react";


interface ProductsContextProps {
    trending: Product[];
    bestSales: Product[];
    preOrder: Product[];
    loading: boolean;
    error: string | null;
}

interface ProductsProviderProps {
    children: React.ReactNode;
}

export const ProductsContext = createContext<ProductsContextProps | undefined>(undefined);

export const ProductsProvider: React.FC<ProductsProviderProps> = ({ children }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // Substitua por sua chamada API real
                const response = await fetch('/api/produtos');
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                setError('Erro ao carregar produtos');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const filterProducts = () => {
        const trending = products.filter(product => product.isTrending === 1);
        const preOrder = products.filter(product => product.isPreOrder === 1);
        const bestSales = products.sort((a, b) => b.rating - a.rating).slice(0, 8);

        return { trending, preOrder, bestSales };
    };

    const { trending, preOrder, bestSales } = filterProducts();

    return (
        <ProductsContext.Provider value={{
            trending,
            bestSales,
            preOrder,
            loading,
            error
        }}>
            {children}
        </ProductsContext.Provider>
    );
};

export const useProducts = () => {
    const context = useContext(ProductsContext);
    if (!context) {
        throw new Error('useProducts deve ser usado dentro de um ProductsProvider');
    }
    return context;
};