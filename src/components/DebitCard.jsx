import React, { useState, useEffect } from "react";
import { FaCreditCard } from "react-icons/fa"; // Icono de tarjeta de débito

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
    <div className="p-8 max-w-5xl mx-auto bg-gray-900 rounded-xl shadow-lg border-2 border-green-500">
      <h3 className="text-3xl font-bold text-white mb-6 text-center flex items-center justify-center">
        <FaCreditCard className="mr-2 text-green-500" /> Tarjeta de Débito
      </h3>
      <div className="space-y-4">
        <p className="text-lg text-gray-300">
          <strong>Saldo Anterior del Wallet:</strong> {initialWallet.toFixed(2)}{" "}
          Tokens
        </p>
        <p className="text-lg text-gray-300">
          <strong>Saldo en el Wallet:</strong> {wallet.toFixed(2)} Tokens
        </p>
        <p className="text-lg text-gray-300">
          <strong>Ganancia Bruta:</strong> {grossGain.toFixed(2)} Tokens
        </p>
        <p className="text-lg text-gray-300">
          <strong>Impuestos a Pagar:</strong> {taxes.toFixed(2)} Tokens (
          {taxRateMessage})
        </p>
        <p className="text-lg text-gray-300">
          <strong>Saldo Disponible en la Tarjeta:</strong>{" "}
          {netBalance.toFixed(2)} Tokens
        </p>
      </div>
    </div>
  );
};

export default DebitCard;
