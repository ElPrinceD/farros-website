export const formatCurrency = (amount: number, currency: string = 'GBP'): string => {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

export const formatPrice = (price: number): string => {
  return formatCurrency(price);
};

export const calculateDiscount = (originalPrice: number, discountPercentage: number): number => {
  return originalPrice * (discountPercentage / 100);
};

export const applyDiscount = (originalPrice: number, discountPercentage: number): number => {
  return originalPrice - calculateDiscount(originalPrice, discountPercentage);
};



