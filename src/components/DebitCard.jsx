import React, { useState, useEffect } from "react";

const DebitCard = ({ wallet = 0, initialWallet = 100000 }) => {
  const [grossGain, setGrossGain] = useState(0); // Ganancia bruta
  const [taxes, setTaxes] = useState(0); // Impuestos a pagar
  const [netBalance, setNetBalance] = useState(0); // Balance final después de impuestos
  const [taxRate, setTaxRate] = useState(0); // Porcentaje de impuestos aplicado
  const [taxRateMessage, setTaxRateMessage] = useState(""); // Mensaje del porcentaje de impuestos aplicado

  // Calcular impuestos basados en la ganancia bruta
  const calculateTaxes = (grossGain) => {
    let tax = 0;
    if (grossGain <= 6000) {
      tax = grossGain * 0.19;
      setTaxRate(19);
      setTaxRateMessage("Hasta 6.000 euros: 19%");
    } else if (grossGain <= 50000) {
      tax = 6000 * 0.19 + (grossGain - 6000) * 0.21;
      setTaxRate(21);
      setTaxRateMessage("Entre 6.000 y 50.000 euros: 21%");
    } else {
      tax = 6000 * 0.19 + 44000 * 0.21 + (grossGain - 50000) * 0.23;
      setTaxRate(23);
      setTaxRateMessage("Más de 50.000 euros: 23%");
    }
    return tax;
  };

  useEffect(() => {
    // La ganancia bruta es la diferencia entre el saldo final del wallet y el saldo inicial
    const newGrossGain = wallet - initialWallet; // La ganancia o pérdida proporcionada
    setGrossGain(newGrossGain);

    // Calcular impuestos sobre la ganancia bruta
    const calculatedTaxes = calculateTaxes(newGrossGain);
    setTaxes(calculatedTaxes);

    // El saldo disponible en la tarjeta es la ganancia bruta menos los impuestos
    const newNetBalance = newGrossGain - calculatedTaxes;
    setNetBalance(newNetBalance > 0 ? newNetBalance : 0);
  }, [wallet, initialWallet]);

  return (
    <div
      style={{
        padding: 20,
        border: "1px solid #ccc",
        borderRadius: "10px",
        marginTop: "20px",
        width: "80%",
        margin: "auto",
      }}
    >
      <h3>Tarjeta de Débito</h3>
      <div>
        <p>Saldo en el Wallet: {wallet.toFixed(2)} Tokens</p>
        <p>Saldo Anterior del Wallet: {initialWallet.toFixed(2)} Tokens</p>
        <p>Ganancia Bruta: {grossGain.toFixed(2)} Tokens</p>
        <p>
          Impuestos a Pagar: {taxes.toFixed(2)} Tokens ({taxRateMessage}){" "}
        </p>

        <p>Saldo Disponible en la Tarjeta: {netBalance.toFixed(2)} Tokens</p>
      </div>
    </div>
  );
};

export default DebitCard;
