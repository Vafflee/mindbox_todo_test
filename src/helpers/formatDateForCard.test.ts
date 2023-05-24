import { formatDateForCard } from './formatDateForCard';

test("Format Date 09.03.2002, 10:00:00 to '09.03.2002 at 10:00:00'", () => {
  const time = Date.parse('2002-03-09T10:00Z');
  const date = new Date(time);
  expect(formatDateForCard(time)).toBe(date.toLocaleDateString() + ' at ' + date.toLocaleTimeString());
});