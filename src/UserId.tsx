import { useEffect, useState } from "react";

interface State {
  userId: number | "loading...";
}

export function UserId(): JSX.Element {
  const [rate, setRate] = useState(0);
  const [result, setResult] = useState(0);
  useEffect(() => {
    const fetchUserId = async () => {
      const headers = {
        "apikey": "uXM4imxrpkOXLiZAC3SrvPFbPcfsPWiC"
      }
      const response = await fetch(
        "https://api.apilayer.com/exchangerates_data/latest?symbols=BOB&base=USD", { headers }
      );
      const { rates } = await response.json()
      setRate(rates.BOB)
      calculate(0)
    };

    fetchUserId();
  }, []);

  const calculate = (value: number) => {
    value > 0 ? setResult(Math.round(value / rate)) : setResult(0)
  }

  return (
    <><input type="number" onChange={(e) => calculate(parseInt(e.target.value))}></input><div>Value: {result}</div></>
  );
}
