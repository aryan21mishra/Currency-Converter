import { useEffect, useState } from "react";

function RatesInfo(amount, from, to) {

   const [Rates, setRates] = useState({})
   useEffect(() => {
      fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`)
         .then(res => res.json())
         .then(res => setRates(res.rates || {}))
         .catch(error => console.log(error))
   }, [amount, from, to])
   return Rates;
}

export default RatesInfo