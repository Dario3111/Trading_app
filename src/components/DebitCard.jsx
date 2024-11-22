import React, { useState, useEffect } from "react";
import {
  FaCreditCard,
  FaWallet,
  FaMoneyBillWave,
  FaHandHoldingUsd,
  FaPercentage,
} from "react-icons/fa"; // Iconos de react-icons

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
    <div className="p-8 max-w-5xl mx-auto bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl shadow-lg border-2 border-green-500 backdrop-blur-md bg-opacity-75">
      <h3 className="text-3xl font-bold text-white mb-6 text-center flex items-center justify-center">
        <FaCreditCard className="mr-2 text-green-500" /> Tarjeta de Débito
      </h3>
      <div className="space-y-4">
        <div className="flex items-center text-lg text-gray-300">
          <FaWallet className="mr-2" />
          <span>{initialWallet.toFixed(2)} Tokens</span>
        </div>
        <div className="flex items-center text-lg text-gray-300">
          <FaMoneyBillWave className="mr-2" />
          <span>{wallet.toFixed(2)} Tokens</span>
        </div>
        <div className="flex items-center text-lg text-gray-300">
          <FaHandHoldingUsd className="mr-2" />
          <span>{grossGain.toFixed(2)} Tokens</span>
        </div>
        <div className="flex items-center text-lg text-gray-300">
          <FaPercentage className="mr-2" />
          <span>
            {taxes.toFixed(2)} Tokens ({taxRateMessage})
          </span>
        </div>
        <div className="flex items-center text-lg text-gray-300">
          <FaCreditCard className="mr-2" />
          <span>{netBalance.toFixed(2)} Tokens</span>
        </div>
      </div>
    </div>
  );
};

export default DebitCard;
