import {
  CurrencyConverter,
  ExchangeRateRepository,
  ExchangeRateService,
} from "./CurrencyConverter";

const exchangeRateService = new ExchangeRateService();
const exchangeRateRepository = new ExchangeRateRepository(exchangeRateService);

const App: React.FC = () => {
  return (
    <>
      <h1>Aplicación x</h1>
      <CurrencyConverter exchangeRatePort={exchangeRateRepository} />
      <div>
        <p>otros componentes</p>
      </div>
    </>
  );
};

export default App;
