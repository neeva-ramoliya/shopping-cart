export const calculatePriceWithDiscount = (price, discount) => {
  const newPrice = price - (price * discount) / 100;
  return parseInt(newPrice) == newPrice
    ? newPrice
    : parseFloat(newPrice).toFixed(2);
};

export const calculateTotalPrice = products => {
  const total = products.reduce((sum, p) => {
    sum = sum + p.qty * p.price;
    return sum;
  }, 0);
  return parseFloat(total).toFixed(2);
};

export const calculateTotalDiscount = products => {
  const discount = products.reduce((sum, p) => {
    !!p.discount && (sum = sum + p.qty * ((p.price * p.discount) / 100));
    return sum;
  }, 0);
  return parseFloat(discount).toFixed(2);
};

export const calculateTypeDiscount = (products, type, amount) => {
  const typeDiscount = products.reduce((sum, p) => {
    p.type == type && (sum = sum + p.qty * ((p.price * amount) / 100));
    return sum;
  }, 0);
  return parseFloat(typeDiscount).toFixed(2);
};
