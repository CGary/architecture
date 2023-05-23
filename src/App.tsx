import { useEffect, useState } from "react";
import { UserId } from "./UserId";

function App() {
  const [exchangeRate, setExchangeRate] = useState();
  const [value, setValue] = useState("");

  useEffect(() => {
    const fetchExchangeRate = async () => {
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

    fetchExchangeRate();
  }, []);

  return (
    <>
      <h1>Aplicación x</h1>
      <UserId />
      <div>
        <p>otros componentes</p>
      </div>
      <input
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <span> dolares</span>
      <p>son</p>
      <p>{parseFloat(value || "0") * (exchangeRate || 0)}</p>
    </>
  );
}

export default App;
