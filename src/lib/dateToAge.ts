export const dateToAge = (date: Date) => {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const years = diff / (1000 * 60 * 60 * 24 * 365);

  return years;
};
