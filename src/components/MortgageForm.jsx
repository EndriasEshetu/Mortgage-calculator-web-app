import { useState } from "react";
import InputField from "./InputField";
import { DEFAULT_FORM_VALUES } from "../constants/default";
import { calculateMortgage } from "../utils/calculateMortgage";

function validateForm(values) {
  const errors = {};

  if (!values.purchasePrice || Number(values.purchasePrice) <= 0) {
    errors.purchasePrice = "Please enter a valid purchase price.";
  }

  if (values.downPayment === "" || Number(values.downPayment) < 0) {
    errors.downPayment = "Please enter a valid down payment.";
  }

  if (
    values.purchasePrice &&
    values.downPayment !== "" &&
    Number(values.downPayment) > Number(values.purchasePrice)
  ) {
    errors.downPayment = "Down payment cannot be more than purchase price.";
  }

  if (!values.termYears || Number(values.termYears) <= 0) {
    errors.termYears = "Please enter a valid repayment time.";
  }

  if (values.interestRate === "" || Number(values.interestRate) < 0) {
    errors.interestRate = "Please enter a valid annual interest rate.";
  }

  return errors;
}

function MortgageForm({ onCalculate }) {
  const [formValues, setFormValues] = useState(DEFAULT_FORM_VALUES);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validateForm(formValues);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    const result = calculateMortgage({
      purchasePrice: Number(formValues.purchasePrice),
      downPayment: Number(formValues.downPayment),
      termYears: Number(formValues.termYears),
      interestRate: Number(formValues.interestRate),
    });

    onCalculate(result);
  };

  const handleClear = () => {
    setFormValues(DEFAULT_FORM_VALUES);
    setErrors({});
    onCalculate(null);
  };

  return (
    <section className="form-panel" aria-labelledby="calculator-title">
      <div className="panel-heading">
        <h1 id="calculator-title">Mortgage Calculator</h1>
        <button type="button" className="ghost-button" onClick={handleClear}>
          Clear all
        </button>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <InputField
          id="purchasePrice"
          label="Purchase Price"
          value={formValues.purchasePrice}
          onChange={handleChange}
          placeholder="350000"
          min="0"
          step="1000"
          prefix="$"
          error={errors.purchasePrice}
        />

        <InputField
          id="downPayment"
          label="Down Payment"
          value={formValues.downPayment}
          onChange={handleChange}
          placeholder="50000"
          min="0"
          step="1000"
          prefix="$"
          error={errors.downPayment}
        />

        <div className="field-grid">
          <InputField
            id="termYears"
            label="Repayment Time"
            value={formValues.termYears}
            onChange={handleChange}
            placeholder="25"
            min="1"
            step="1"
            suffix="years"
            error={errors.termYears}
          />

          <InputField
            id="interestRate"
            label="Interest Rate"
            value={formValues.interestRate}
            onChange={handleChange}
            placeholder="5.25"
            min="0"
            step="0.01"
            suffix="%"
            error={errors.interestRate}
          />
        </div>

        <button className="calculate-button" type="submit">
          Calculate estimate
        </button>
      </form>
    </section>
  );
}

export default MortgageForm;
