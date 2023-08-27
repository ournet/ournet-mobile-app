import ms from "ms";

export const inSeconds = (input: string | number) =>
  Math.round((typeof input === "string" ? ms(input) : input * 1000) / 1000);

export const uniq = <T>(arr: T[]) => [...new Set(arr)];
