import { TProject } from './types';

export const select = (data: TProject[], filter: string) => {
  if (filter === 'ongoing') return data.filter((i) => i.ongoing);
  if (filter === 'finished') return data.filter((i) => !i.ongoing);
  return data;
};
