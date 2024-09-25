export const getMonth = (date: number): string => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return months[date];
};

export const formatCurrency = (price: number): string => {
  const pounds: Intl.NumberFormat = Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  });

  return pounds.format(price);
};
