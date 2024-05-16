import React, { useEffect, useState } from 'react';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import InputBox from './components/InputBox';
import './App.css';
import BackgroundImage from './assets/digitalCurrency.jpg';

function App() {
  // Declaring states and their default values
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('PKR');
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [hasConverted, setHasConverted] = useState(false);
  const [isSwapped, setIsSwapped] = useState(false);

  // Using custom hook to get the currency rates
  const currencyRates = useCurrencyInfo(fromCurrency);
  const options = Object.keys(currencyRates);
  const exchangeRate = currencyRates[toCurrency];

  function convertAmount() {
    setConvertedAmount(amount * exchangeRate);
  }

  useEffect(() => {
    if (exchangeRate && !hasConverted) {
      convertAmount();
      setHasConverted(true);
    }
  }, [exchangeRate, hasConverted]);

  const swap = () => {
    setToCurrency(fromCurrency);
    setFromCurrency(toCurrency);
  }

  const handleSwap = () => {
    swap();
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center main-bg-img"
      style={{ backgroundImage: `url('${BackgroundImage}')`, }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <div className="w-full mb-1">
            <InputBox label="From" className='shadow-sm shadow-black' currencyOptions={options} amount={amount} selectedCurrency={fromCurrency} onAmountChange={setAmount} onCurrencyChange={setFromCurrency} />
          </div>
          <div className="relative w-full h-0.5">
            <button onClick={handleSwap} type="button" className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5">
              swap
            </button>
          </div>
          <div className="w-full mt-1 mb-4">
            <InputBox label="To" className='shadow-sm shadow-black' currencyOptions={options} isAmountDisabled={true} amount={convertedAmount} selectedCurrency={toCurrency} onCurrencyChange={setToCurrency} />
          </div>
          <button type="submit" onClick={() => convertAmount()} className="flex justify-center items-center w-full bg-blue-700 text-white px-4 py-[8px] rounded-lg font-semibold text-xl">
            <i class="fa-solid fa-money-bill-transfer fa-sm me-[6px]"></i>
            <span className='mb-[2.5px]'>Convert</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App