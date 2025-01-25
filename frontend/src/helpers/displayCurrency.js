const displayTRYCurrency = (num) => {
  const formatter = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    minimumFractionDigits: 2,
  });

  return formatter.format(num);
};

export default displayTRYCurrency;
