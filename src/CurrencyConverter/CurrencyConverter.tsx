import { useState, useEffect } from "react";
import { useExchangeRateFetcher } from "./useExchangeRateFetcher";
import { ConversionResult, ConversionResultProps } from "./ConversionResult";

export const CurrencyConverter: React.FC = () => {
  console.log("Render App");
  const [localCurrencyValue, setLocalCurrencyValue] = useState("");
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const { getExchangeRate } = useExchangeRateFetcher();

  useEffect(() => {
    console.log("getExchangeRate");
    getExchangeRate().then((exchangeRate) => {
      setExchangeRate(exchangeRate);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLocalCurrencyValue(event.target.value);
  };

  const getDollarAmount = (): number | null => {
    if (localCurrencyValue && exchangeRate) {
      return parseFloat(localCurrencyValue) / exchangeRate;
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
