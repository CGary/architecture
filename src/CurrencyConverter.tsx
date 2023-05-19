import React, { useEffect, useState } from "react";

type dolarState = number | "novalue" | "loading" | "error";
export const CurrencyConverter: React.FC = () => {
  const [localCurrencyValue, setLocalCurrencyValue] = useState("");
  const [dollarAmount, setDollarAmount] = useState<dolarState>("novalue");
  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const myHeaders = new Headers();
        myHeaders.append("apikey", "uXM4imxrpkOXLiZAC3SrvPFbPcfsPWiC");
        const response = await fetch(
          "https://api.apilayer.com/exchangerates_data/latest?symbols=BOB&base=USD",
          { method: "GET", headers: myHeaders }
        );
        const {
          rates: { BOB: exchangeRate },
        } = await response.json();
        const amountInDollars = parseFloat(localCurrencyValue) / exchangeRate;
        setDollarAmount(amountInDollars);
      } catch (error) {
        console.error("Error on fetching exchange rate:", error);
        setDollarAmount("error");
      }
    };
    if (localCurrencyValue) {
      setDollarAmount("loading");
      fetchExchangeRate();
    } else {
      setDollarAmount("novalue");
    }
  }, [localCurrencyValue]);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalCurrencyValue(event.target.value);
  };
  return (
    <div>
      <h2>Currency Converter Component</h2>
      <input
        type="number"
        value={localCurrencyValue}
        onChange={handleInputChange}
      />
      {dollarAmount === "novalue" && <p>Enter a value to convert</p>}
      {dollarAmount === "loading" && <p>Cargando...</p>}
      {typeof dollarAmount === "number" && (
        <p>{`$${dollarAmount.toFixed(2)} USD`}</p>
      )}
      {dollarAmount === "error" && (
        <p>Ocurrió un error inesperado consulte su proveedor</p>
      )}
    </div>
  );
};
