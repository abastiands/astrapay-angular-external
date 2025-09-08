export function dateNow(): string {
  return new Date().toISOString().split('T')[0];
}

export function dateYesterday(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().split('T')[0];
}

export function dateTwoDaysAgo(): string {
  const d = new Date();
  d.setDate(d.getDate() - 2);
  return d.toISOString().split('T')[0];
}

export function weekStartDate(): string {
  const d = new Date();
  const day = d.getDay();
  d.setDate(d.getDate() - day + 1);
  return d.toISOString().split('T')[0];
}

export function weekStartDateLastWeek(): string {
  const d = new Date();
  d.setDate(d.getDate() - 7);
  const day = d.getDay();
  d.setDate(d.getDate() - day + 1);
  return d.toISOString().split('T')[0];
}

export function monthStartDate(): string {
  const d = new Date();
  d.setDate(1);
  return d.toISOString().split('T')[0];
}

export function monthStartDateLastMonth(): string {
  const d = new Date();
  d.setMonth(d.getMonth() - 1);
  d.setDate(1);
  return d.toISOString().split('T')[0];
}
