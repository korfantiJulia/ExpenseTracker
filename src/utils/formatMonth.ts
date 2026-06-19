// "2026-06" -> "June 2026"
export function formatMonth(month: string): string {
  const [year, monthNumber] = month.split("-");
  const date = new Date(Number(year), Number(monthNumber) - 1);
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}
