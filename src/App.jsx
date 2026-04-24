import { useState } from "react";
import MortgageForm from "./components/MortgageForm";
import Navbar from "./components/Navbar";
import Results from "./components/Results";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  const [result, setResult] = useState(null);

  return (
    <>
      <Navbar />
      <main className="app-shell">
        <section className="calculator-card" aria-label="Mortgage calculator">
          <MortgageForm onCalculate={setResult} />
          <Results result={result} />
        </section>
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;
