export const formatAmountInCurrency = (amount, currency) => {

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  });

  return formatter.format(amount).replace(/\u00a0/g, ' ');
};