import { useEffect, useState } from "react";

interface State {
  userId: number | "loading...";
}

export function CurrencyConverter(): JSX.Element {
  const [localValue, setLocalValue] = useState("");
  const [result, setResult] = useState<State>();
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  useEffect(() => {
    const fetchUserId = async () => {
      const myHeaders = new Headers();
      myHeaders.append("apikey", "uXM4imxrpkOXLiZAC3SrvPFbPcfsPWiC");
      const response = await fetch(
        "https://api.apilayer.com/exchangerates_data/latest?symbols=BOB&base=USD",
        { method: "GET", headers: myHeaders }
      );
      const {
        rates: { BOB: exchangeRate },
      } = await response.json();
      setExchangeRate(exchangeRate);
    };

    fetchUserId();
  }, []);

  const changeValue = (e: any) => {
    setLocalValue(e.target.value);
  };

  const newLocal = parseFloat(localValue) / parseFloat(exchangeRate);
  return (
    <>
      <div>Currency Converter</div>
      <input value={localValue} onChange={changeValue} />
      <span>USD: {parseFloat(newLocal)}</span>
    </>
  );
}
