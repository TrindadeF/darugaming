const apiKey = process.env.EXCHANGE_API_KEY

export const fetchExchangeRates = async () => {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`);
    const data = await response.json();
    return data.rates;
};

export const convertCurrency = (priceInUSD: number, exchangeRate: number) => {
    return priceInUSD * exchangeRate;
};