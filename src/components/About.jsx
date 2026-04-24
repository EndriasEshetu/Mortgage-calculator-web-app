import "../../src/App.css";

const About = () => {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="about-header">
        <h1 id="about-title">About Mortgage Calculator</h1>
        <p className="about-kicker">How this estimate works</p>
      </div>

      <p>
        A mortgage calculator is a simple tool that helps you estimate how much
        you will pay each month when you take a home loan. Instead of guessing
        or doing complex calculations manually, this calculator gives you a
        clear financial picture in seconds.
      </p>

      <p>
        By entering the purchase price, down payment, interest rate, and loan
        duration, you can quickly understand:
      </p>

      <ul className="about-list">
        <li>The total loan amount you need to borrow</li>
        <li>Your estimated monthly payment (EMI)</li>
        <li>The total cost of the loan over time</li>
      </ul>

      <h2>How It Works</h2>

      <p>
        The calculator uses a standard financial formula to compute your monthly
        mortgage payment based on compound interest.
      </p>

      <div className="formula">
        <p>
          <strong>Monthly Payment Formula:</strong>
        </p>
        <p className="equation">
          M = P × [ r(1 + r)<sup>n</sup> ] / [ (1 + r)<sup>n</sup> − 1 ]
        </p>
      </div>

      <div className="definitions">
        <p>
          <strong>Where:</strong>
        </p>
        <ul className="about-list">
          <li>
            <strong>M</strong> = Monthly payment
          </li>
          <li>
            <strong>P</strong> = Loan amount
          </li>
          <li>
            <strong>r</strong> = Monthly interest rate
          </li>
          <li>
            <strong>n</strong> = Total number of payments (months)
          </li>
        </ul>
      </div>

      <p>
        This formula ensures that your loan is paid off over time with equal
        monthly payments that include both principal and interest.
      </p>

      <p>
        Use this tool to make smarter financial decisions and plan your future
        with confidence.
      </p>
    </section>
  );
};

export default About;
