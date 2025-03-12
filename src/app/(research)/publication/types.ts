export interface TPublication {
  uid: number;
  publishedAt: string | null;
  showYear?: boolean;
  title: string;
  author: string;
  information: string;
  image: string | null;
  url: string | null;
}
