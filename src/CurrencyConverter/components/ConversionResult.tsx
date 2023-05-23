import React from "react";
import { ExchangeRate } from "../entities/ExchangeRate";

export interface ConversionResultProps {
  dollarAmount: number | null;
  exchangeRate: ExchangeRate | null;
  localCurrencyValue: string;
}

export const ConversionResult: React.FC<ConversionResultProps> = (props) => {
  const { dollarAmount, exchangeRate, localCurrencyValue } = props;
  if (exchangeRate !== null && localCurrencyValue && dollarAmount !== null) {
    return <p>{`$${dollarAmount.toFixed(2)} USD`}</p>;
  }
  return <p>Enter a value to convert</p>;
};