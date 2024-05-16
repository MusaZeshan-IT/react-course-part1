import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    const [currencyInfo, setCurrencyInfo] = useState({})
    useEffect(() => {
        const requestURL = `https://v6.exchangerate-api.com/v6/4bebfb035f023286823b365e/latest/${currency}`
        fetch(requestURL)
            .then((response) => {
                return response.json();
            })
            .then((jsonResponse) => {
                return jsonResponse.conversion_rates;
            }).then((conversionRates) => {
                setCurrencyInfo(conversionRates);
            })
            .catch(error => console.log(error))
    }, [currency])
    return currencyInfo;
}

export default useCurrencyInfo;