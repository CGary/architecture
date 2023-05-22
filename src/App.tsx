import { CurrencyConverter } from "./CurrencyConverter";

const App: React.FC = () => {
  console.log("Render App");
  return (
    <>
      <h1>Aplicación x</h1>
      <CurrencyConverter />
      <div>
        <p>otros componentes</p>
      </div>
    </>
  );
};

export default App;
