import React, { useId } from 'react';

function SelectBox({
   labelName,
   CurrencyOptions = [],
   SelectValue = 'USD',
   currencychange,
}) {
   return (
      <div className='max-w-max flex flex-col'>
         <label className='mb-2'>{labelName}:</label>
         <select className='w-28 outline-none bg-slate-300 rounded-md py-1'
            value={SelectValue}
            onChange={(e) => { currencychange && currencychange(e.target.value) }}
         >
            {CurrencyOptions.map((currency) => (
               <option key={currency} value={currency}>
                  {currency}
               </option>
            ))}
         </select>
      </div>
   );
}

export default SelectBox;
