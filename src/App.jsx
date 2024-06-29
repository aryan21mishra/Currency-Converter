import { useState } from 'react'
import useCurrencyInfo from './hooks/hooks'
import RatesInfo from './hooks/hooks2'
import SelectBox from './components/InputBox';


function App() {
  const currencyInfo = useCurrencyInfo()
  const Option = Object.keys(currencyInfo)
  const [from, setfrom] = useState('USD')
  const [to, setto] = useState('INR')
  const [amount, setamount] = useState(1)
  const Rates = RatesInfo(amount, from, to)
  const Rate = Object.values(Rates)

  const Swap = () => {
    setfrom(to)
    setto(from)
  }

  return (
    <div className='w-full h-lvh bg-slate-500 flex justify-center items-center'>
      <div className='min-w-max h-max p-6 bg-slate-50 rounded-md'>

        <h1 className='text-2xl'>Currency Converter</h1>

        <div className='flex items-center justify-between gap-24 mt-3'>
          <SelectBox labelName='From' CurrencyOptions={Option} currencychange={(currency) => {
            setfrom(currency)
          }}
            SelectValue={from}
          />

          <button className='max-w-max h-max bg-slate-500 px-2 py-1 rounded-md text-cyan-50'
            onClick={Swap}
          >Swap</button>

          <SelectBox labelName='To' CurrencyOptions={Option}
            currencychange={(currency) => {
              setto(currency)
            }}
            SelectValue={to} />

        </div>
        <div className='w-full h-max border-2 border-solid border-slate-500 rounded-md overflow-hidden mt-2.5'>
          <input
            className='p-1 outline-none w-full text-sm'
            type='number'
            value={amount}
            onChange={(e) => setamount(e.target.value)}
          />
        </div>
        <div className='w-full h-max mt-2 flex items-end justify-end'>
          <p className='w-full h-max p-2 text-center bg-slate-600 text-white rounded-md'>{amount} {from} = {Rate} {to}</p>
        </div>

      </div>
    </div>
  );
}
export default App