import { useEffect, useState } from "react";

function useCurrencyInfo() {
   const [data, setData] = useState({})
   useEffect(() => {
      fetch(`https://api.frankfurter.app/currencies`)
         .then(res => res.json())
         .then(res => setData(res))
   }, [setData])
   return data;
}

function useRatesInfo(amount, from, to) {
   const [Rates, setRates] = useState({})
   useEffect(() => {
      fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`)
         .then(res => res.json())
         .then(res => setRates(res.rates.to))
   }, [amount, from, to])
   return Rates;
}

export default useCurrencyInfo