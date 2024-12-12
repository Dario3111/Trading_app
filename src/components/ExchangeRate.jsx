import React, { useState, useEffect } from "react";
import axios from "axios";

// function ExchangeRate() {
//   const [rates, setRates] = useState({});
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios
//       .get("https://open.er-api.com/v6/latest/USD")
//       .then((response) => {
//         setRates(response.data.rates);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching exchange rates:", error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div>
//       <h1>Exchange Rates</h1>
//       <ul>
//         {Object.entries(rates).map(([currency, rate]) => (
//           <li key={currency}>
//             {currency}: {rate}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

function ExchangeRate() {
  const [rates, setRates] = useState({});
  const [base, setBase] = useState("USD");
  const [loading, setLoading] = useState(false);

  const fetchRates = () => {
    setLoading(true);
    axios
      .get(`https://open.er-api.com/v6/latest/${base}`)
      .then((response) => {
        setRates(response.data.rates);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching exchange rates:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchRates(); // Llama a la API al montar el componente
  }, [base]); // Ejecuta el efecto si cambia la moneda base

  return (
    <div>
      <h1>Exchange Rates</h1>
      <select onChange={(e) => setBase(e.target.value)} value={base}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
      </select>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {Object.entries(rates).map(([currency, rate]) => (
            <li key={currency}>
              {currency}: {rate}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExchangeRate;
