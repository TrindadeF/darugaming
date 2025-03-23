const apiKey = process.env.EXCHANGE_API_KEY

export const GetItem = async () => {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`, { next: { revalidate: 86400 } });
    const data = await response.json();
    console.log(data)
    return data.conversion_rates;
};

export const convertCurrency = (priceInUSD: number, exchangeRate: number) => {
    return priceInUSD * exchangeRate;
};