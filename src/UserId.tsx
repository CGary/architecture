import { useEffect, useState } from "react"

export function UserId(): JSX.Element {
  const [result, setResult] = useState<string | number>(0)
  const [exchangeRate, setExchangeRate] = useState<number | null>(null)

  useEffect(() => {
    const fetchUserId = async () => {
      const myHeaders = new Headers()
      myHeaders.append("apikey", "uXM4imxrpkOXLiZAC3SrvPFbPcfsPWiC")
      const response = await fetch(
        "https://api.apilayer.com/exchangerates_data/latest?symbols=BOB&base=USD",
        { method: "GET", headers: myHeaders }
      )
      const {
        rates: { BOB: exchangeRate },
      } = await response.json()
      setExchangeRate(exchangeRate)
    }

    fetchUserId()
  }, [])

  return (
    <div>
      <label>USD: </label>
      <input type="number" value={result} onChange={e => setResult(e.target.value)} />
      <div>BOB: {exchangeRate * result}</div>
    </div>
  )
}
