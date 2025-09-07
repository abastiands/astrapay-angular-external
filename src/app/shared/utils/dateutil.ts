export function dateNow(): string {
  return new Date().toISOString().split('T')[0];
}
