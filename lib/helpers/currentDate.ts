export function currentDate() {
  let today = new Date().toISOString().slice(0, 10);
  return today;
}

export function previousMonth() {
  const current = new Date();
  current.setMonth(current.getMonth() - 1);
  const previous = current.toLocaleString('default', { month: 'long' });
  return previous;
}
