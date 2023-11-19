export const calculatePercentageDiscount = (
  price: number,
  discount: number
) => {
  const percentageDiscount = ((price - discount) / price) * 100;
  const roundedDiscount = Math.round(percentageDiscount);
  return roundedDiscount;
};
