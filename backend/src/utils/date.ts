// src/utils/date.ts
export function formatDate(date: Date | string) {
  const d = new Date(date)
  return d.toISOString().replace('T', ' ').split('.')[0]
}

export function addMinutes(date: Date, minutes: number) {
  return new Date(date.getTime() + minutes * 60000)
}
