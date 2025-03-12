import { TLecture, TLectureSelected } from './types';

export const select = (
  data: TLecture[],
  filter: string
): TLectureSelected[] => {
  const filtered = data.filter((i) => {
    if (filter === 'postgraduate') return i.postgraduate;
    if (filter === 'undergraduate') return !i.postgraduate;
    return true;
  });

  const grouped = new Map<number, TLectureSelected>();

  filtered.forEach((item) => {
    if (!grouped.has(item.year)) {
      grouped.set(item.year, {
        year: item.year,
        postgraduate: { spring: [], fall: [] },
        undergraduate: { spring: [], fall: [] },
      });
    }

    const target = grouped.get(item.year)!;
    const category = item.postgraduate ? 'postgraduate' : 'undergraduate';

    target[category].spring.push(...item.spring);
    target[category].fall.push(...item.fall);
  });

  return Array.from(grouped.values());
};
