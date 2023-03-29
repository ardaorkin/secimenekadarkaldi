import { DIVIDERS } from "./types";

export const getRemainings = (diffInMs: number): any => {
  let diff = diffInMs;
  return Object.entries(DIVIDERS).reduce((prev, [key, value]) => {
    const remainings = { ...prev, [key.toLowerCase()]: Math.floor(diff / value) };
    diff = diff % value;
    return remainings;
  }, {});
};
