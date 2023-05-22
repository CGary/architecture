export const useExchangeRateFetcher = () => {
  const getExchangeRate = async () => {
    const myHeaders = new Headers();
    myHeaders.append("apikey", "uXM4imxrpkOXLiZAC3SrvPFbPcfsPWiC");
    const response = await fetch(
      "https://api.apilayer.com/exchangerates_data/latest?symbols=BOB&base=USD",
      { method: "GET", headers: myHeaders }
    );
    const {
      rates: { BOB: exchangeRate },
    } = await response.json();
    return exchangeRate;
  };
  return { getExchangeRate };
};
