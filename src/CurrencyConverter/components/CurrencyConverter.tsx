import React, { useState, useEffect } from "react";
import { ExchangeRate } from "../entities/ExchangeRate";
import { ExchangeRateRepository } from "../repositories/ExchangeRateRepository";
import { ExchangeRateService } from "../services/ExchangeRateService";
import { ConversionResult, ConversionResultProps } from "./ConversionResult";

export const CurrencyConverter: React.FC = () => {
  const [localCurrencyValue, setLocalCurrencyValue] = useState("");
  const [exchangeRate, setExchangeRate] = useState<ExchangeRate | null>(null);

  useEffect(() => {
    const exchangeRateService = new ExchangeRateService();
    const exchangeRateRepository = new ExchangeRateRepository(
      exchangeRateService
    );

    exchangeRateRepository
      .getExchangeRate()
      .then((rate) => setExchangeRate(rate));
  }, []);

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

  // return (
  //   <div>
  //     <h1>Currency Converter</h1>
  //     {exchangeRate ? (
  //       <CurrencyDisplay
  //         localCurrency={localCurrency}
  //         exchangeRate={exchangeRate}
  //       />
  //     ) : (
  //       <p>Loading exchange rate...</p>
  //     )}
  //   </div>
  // );
};
