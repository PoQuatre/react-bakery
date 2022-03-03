export const capitalize = (str: string): string => {
  return str
    .toLowerCase()
    .replace(/\w\S*/g, (word) =>
      word.replace(/^\w/, (char) => char.toUpperCase())
    );
};

const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const charsLength = chars.length;

export const randomString = (length: number): string => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * charsLength)];
  }
  return result;
};
