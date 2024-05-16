import React from 'react'


function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "USD",
    isAmountDisabled = false,
    isCurrencyDisabled = false,
    className = "",
}) {
    const handleAmountChange = (e) => {
        if (onAmountChange) {
            onAmountChange(e.target.value); // Only call onAmountChange if it is defined
        }
    };

    const handleCurrencyChange = (e) => {
        if (onCurrencyChange) {
            onCurrencyChange(e.target.value); // Only call onCurrencyChange if it is defined
        }
    };

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label className="text-black/40 mb-2 inline-block text-base font-bold">{label}</label>
                <input className="outline-none w-full bg-transparent py-1.5 text-base font-semibold" type="number" placeholder="Amount" disabled={isAmountDisabled} value={amount} onChange={handleAmountChange} />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full font-bold">Currency Type</p>
                <select aria-label='Currency Type' className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none" disabled={isCurrencyDisabled} value={selectedCurrency} onChange={handleCurrencyChange}>
                    {currencyOptions.map(function (currency) {
                        return <option key={currency} value={currency.toUpperCase()}>{currency}</option>
                    })}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
