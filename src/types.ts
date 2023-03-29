export const DIVIDERS = {
  DAY: 1000 * 60 * 60 * 24,
  HOUR: 1000 * 60 * 60,
  MINUTE: 1000 * 60,
  SECOND: 1000,
} as const;

export type Remainings = {
  day: number;
  hour: number;
  minute: number;
  second: number;
};

export const TR_TYPES = {
  day: "gün",
  hour: "saat",
  minute: "dakika",
  second: "saniye",
};
