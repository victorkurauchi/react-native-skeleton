export function arraySum(arr: number[]): number {
  return arr.reduce((total, value) => total + value, 0);
}
