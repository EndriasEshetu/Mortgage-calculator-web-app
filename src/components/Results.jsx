import { formatCurrency } from "../utils/formatCurrency";

function Results({ result }) {
  if (!result) {
    return (
      <section className="results-panel empty" aria-live="polite">
        <h2>Loan Snapshot</h2>
        <p>
          Fill the form and calculate to preview your loan amount and monthly
          estimate.
        </p>
      </section>
    );
  }

  return (
    <section className="results-panel" aria-live="polite">
      <div className="overview-grid">
        <article className="overview-card">
          <p className="overview-title">Repayment Time</p>
          <p className="overview-value">
            {result.termYears} <span>years</span>
          </p>
        </article>

        <article className="overview-card">
          <p className="overview-title">Interest Rate</p>
          <p className="overview-badge">{result.interestRate}%</p>
          <p className="overview-subtitle">Fixed</p>
        </article>
      </div>

      <article className="overview-card full-width">
        <p className="overview-title">Loan Amount</p>
        <p className="overview-value">{formatCurrency(result.loanAmount)}</p>
      </article>

      <div className="result-card">
        <p className="result-label">Estimated payment</p>
        <p className="result-value accent">
          {formatCurrency(result.monthlyPayment)}
          <span className="result-pill">Month</span>
        </p>
      </div>
    </section>
  );
}

export default Results;
