const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
});

export function formatCurrency(value) {
  if (!Number.isFinite(value)) {
    return currencyFormatter.format(0);
  }

  return currencyFormatter.format(value);
}
