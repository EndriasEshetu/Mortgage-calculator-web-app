const MONTHS_IN_YEAR = 12;

export function calculateMortgage({
  purchasePrice,
  downPayment,
  termYears,
  interestRate,
}) {
  const loanAmount = Math.max(purchasePrice - downPayment, 0);
  const totalPayments = termYears * MONTHS_IN_YEAR;
  const monthlyRate = interestRate / 100 / MONTHS_IN_YEAR;

  let monthlyPayment = 0;

  if (loanAmount > 0 && totalPayments > 0) {
    if (monthlyRate === 0) {
      monthlyPayment = loanAmount / totalPayments;
    } else {
      const factor = (1 + monthlyRate) ** totalPayments;
      monthlyPayment = (loanAmount * monthlyRate * factor) / (factor - 1);
    }
  }

  const totalRepayment = monthlyPayment * totalPayments;

  return {
    purchasePrice,
    downPayment,
    termYears,
    interestRate,
    loanAmount,
    monthlyPayment,
    totalRepayment,
  };
}
