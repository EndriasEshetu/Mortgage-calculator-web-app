import { useState } from "react";
import MortgageForm from "./components/MortgageForm";
import Results from "./components/Results";

function App() {
  const [result, setResult] = useState(null);

  return (
    <main className="app-shell">
      <section className="calculator-card" aria-label="Mortgage calculator">
        <MortgageForm onCalculate={setResult} />
        <Results result={result} />
      </section>
    </main>
  );
}

export default App;
