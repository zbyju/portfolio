import { format, intervalToDuration } from "date-fns";

export function displayDate(d: Date | string): string {
  if (typeof d === "string") return d;
  return format(d, "MMMM yyyy");
}

export function displayDuration(d1: Date, d2: Date | string): string {
  if (typeof d2 === "string") d2 = new Date();
  const duration = intervalToDuration({
    start: d1,
    end: d2,
  });

  const { years, months } = duration;
  const yearsStr = displayDurationWord(years, "year");
  const monthsStr = displayDurationWord(months, "month");

  return yearsStr.length > 0 && monthsStr.length > 0
    ? `${yearsStr} and ${monthsStr}`
    : monthsStr.length === 0 && yearsStr.length === 0
      ? "1 month"
      : yearsStr.length === 0
        ? monthsStr
        : yearsStr;
}

export function displayDurationWord(x: number | undefined, s: string): string {
  return x === 0 || x === undefined ? "" : x === 1 ? `${x} ${s}` : `${x} ${s}s`;
}
