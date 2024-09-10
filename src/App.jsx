import { useState } from 'react';
import bg from './assets/images/bg.jpg';
import Input from './components/Input';
import useCurrencyInfo from './hooks/useCurrencyInfo';
function App() {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const currencyOptions = currencyInfo ? Object.keys(currencyInfo) : [];

  const convert = () => {
    if (currencyInfo && currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    }
  };

  const swap = () => {
    // Store current values in temporary variables
    const tempFrom = from;
    const tempAmount = amount;
    
    // Update states
    setFrom(to);
    setTo(tempFrom);
    
    // Update amounts
    setAmount(convertedAmount);
    setConvertedAmount(0);
  };

  return (
    <>
      <div
        className='min-h-screen bg-cover bg-center flex items-center justify-center'
        style={{ backgroundImage: `url(${bg})` }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
          action=""
        >
          <div className=' rounded-sm flex flex-col justify-center items-center p-2' >
            <div className='text-2xl p-4 font-bold w-full flex justify-center text-white bg-red-600 rounded-sm m-2'>Currency Calculator</div>
            <Input
              label="From"
              amount={amount}
              selectCurrency={from}
              currencyOptions={currencyOptions}
              onAmountChange={(amount) => setAmount(amount)}
              onCurrencyChange={(currency) => setFrom(currency)}
            />
            <button
              type='button'
              onClick={swap}
              className='p-2 m-2 outline-none bg-blue-700 rounded-full text-white hover:bg-blue-600 transition-colors duration-100'
            >
              Swap
            </button>
            <Input
              label="To"
              amount={convertedAmount}
              selectCurrency={to}
              currencyOptions={currencyOptions}
              onCurrencyChange={(currency) => setTo(currency)}
              amountDisable={true}
            />
            <button
              type="submit"
              className='p-2 m-2  font-semibold outline-none bg-red-700 rounded-full text-white hover:bg-red-600 transition-colors duration-100'
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
