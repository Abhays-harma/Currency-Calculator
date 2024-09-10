import React from 'react';

function Input({
  label,
  amount,
  currencyOptions = [],
  onAmountChange,
  onCurrencyChange,
  amountDisable = false,
  currencyDisable = false,
  selectCurrency,
}) {
  return (
    <div className='flex flex-col gap-4 border border-black p-2 rounded-sm' style={{backgroundColor:'rgba(255, 255, 255, 0.5)'}}>
      <div className='flex justify-between p-4'>
        <label htmlFor="">
          {label}
        </label>
        <div>
          Currency Name
        </div>
      </div>
      <div className='flex justify-between p-4 gap-16'>
        <input
          type="Number"
          placeholder='Amount'
          className='outline-none border border-black rounded-sm w-1/2 px-2 py-1'
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          disabled={amountDisable}
        />
        <select
          className='outline-none border border-black rounded-full'
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
          value={selectCurrency}
        >
          {currencyOptions.map((currency) => (
            <option
              key={currency}
              value={currency}
            >
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Input;
