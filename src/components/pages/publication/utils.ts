import { TPublication } from '@/app/(research)/publication/types';

export const showYear = (
  data: TPublication[],
  index: number,
  publishedAt: string | null
) => {
  // preprint
  if (!publishedAt) return false;

  // the first publication
  if (index === 0) return true;

  const pre = data[index - 1].publishedAt;
  if (!pre) return true; // should not happen (type safety)

  return new Date(pre).getFullYear() !== new Date(publishedAt).getFullYear();
};
