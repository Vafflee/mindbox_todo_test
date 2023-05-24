export function formatDateForCard(date: number) {
  let dateString = 'Undefined';
  try {
    dateString = (new Date(date)).toLocaleDateString() + ' at ' + (new Date(date)).toLocaleTimeString()
  } catch (e) {
    console.log(e)
  }
  return dateString;
}