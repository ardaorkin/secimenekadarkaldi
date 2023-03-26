export const DIVIDERS = {
  MONTH: 1000 * 60 * 60 * 24 * 30,
  WEEK: 1000 * 60 * 60 * 24 * 7,
  DAY: 1000 * 60 * 60 * 24,
  HOUR: 1000 * 60 * 60,
  MINUTE: 1000 * 60,
  SECOND: 1000,
} as const;

export type Remainings = {
  months: number;
  weeks: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export const TR_TYPES = {
  months: "ay",
  weeks: "hafta",
  days: "gün",
  hours: "saat",
  minutes: "dakika",
  seconds: "saniye",
};
