import { DIVIDERS, Remainings } from "./types";

const { MONTH, WEEK, DAY, HOUR, MINUTE, SECOND } = DIVIDERS;

export const getRemainings = (diffInMs: number): Remainings => {
  let diff = diffInMs;
  const months = Math.floor(diff / MONTH);
  diff = diff % MONTH;
  const weeks = Math.floor(diff / WEEK);
  diff = diff % WEEK;
  const days = Math.floor(diff / DAY);
  diff = diff % DAY;
  const hours = Math.floor(diff / HOUR);
  diff = diff % HOUR;
  const minutes = Math.floor(diff / MINUTE);
  diff = diff % MINUTE;
  const seconds = Math.floor(diff / SECOND);
  return {
    months,
    weeks,
    days,
    hours,
    minutes,
    seconds,
  };
};
