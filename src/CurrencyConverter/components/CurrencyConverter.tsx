import React, { useState, useEffect } from "react";
import { ExchangeRate } from "../entities/ExchangeRate";
import { ExchangeRateRepository } from "../repositories/ExchangeRateRepository";
import { ConversionResult, ConversionResultProps } from "./ConversionResult";

interface CurrencyConverterProps {
  exchangeRatePort: ExchangeRateRepository;
}

export const CurrencyConverter: React.FC<CurrencyConverterProps> = ({
  exchangeRatePort,
}) => {
  const [localCurrencyValue, setLocalCurrencyValue] = useState("");
  const [exchangeRate, setExchangeRate] = useState<ExchangeRate | null>(null);

  useEffect(() => {
    exchangeRatePort.getExchangeRate().then((rate) => setExchangeRate(rate));
  }, [exchangeRatePort]);

  const handleInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLocalCurrencyValue(event.target.value);
  };

  const getDollarAmount = (): number | null => {
    if (localCurrencyValue && exchangeRate) {
      return parseFloat(localCurrencyValue) / exchangeRate.rate;
    }
    return null;
  };

  const ConversionResultProps: ConversionResultProps = {
    dollarAmount: getDollarAmount(),
    exchangeRate,
    localCurrencyValue,
  };

  return (
    <div>
      <h1>Currency Converter</h1>
      <input
        type="number"
        value={localCurrencyValue}
        onChange={handleInputChange}
      />
      <ConversionResult {...ConversionResultProps} />
    </div>
  );
};