import { careerStart } from "@/data/portfolio";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://jegamax.github.io/Jegatheesh-Conspectus").replace(/\/$/, "");
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a /public asset path with the deployment base path. */
export const asset = (path: string) => `${BASE_PATH}${path}`;

/** Whole years since the first professional role (derived from verified employment dates). */
export function yearsOfExperience(now = new Date()) {
  let y = now.getFullYear() - careerStart.year;
  if (now.getMonth() + 1 < careerStart.month) y -= 1;
  return y;
}
