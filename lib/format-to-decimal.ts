export const formatToDecimal = (str: string) => {
  const num = Number(str);
  const result = (num / 100).toFixed(2);

  return result;
};
