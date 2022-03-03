export const capitalize = (str: string): string => {
  return str
    .toLowerCase()
    .replace(/\w\S*/g, (word) =>
      word.replace(/^\w/, (char) => char.toUpperCase())
    );
};
