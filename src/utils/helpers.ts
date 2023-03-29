export const changePointToComma = (price: number | string) => {
  if (typeof price === 'number') return price.toString().replace(/\./g, ',');
  return price.replace(/\./g, ',');
};
