export const get10UnitRange = (current: number) => {
  const start = Math.floor((current - 1) / 10) * 10 + 1;
  const end = start + 9;
  return [start, end];
};
