export const formatCurrency = (value: number, locale = "ko-KR"): string => {
  return new Intl.NumberFormat(locale, {
    maximumFractionDigits: 0,
  }).format(value);
};
