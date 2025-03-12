export interface TLecture {
  year: number;
  postgraduate: number;
  spring: string[];
  fall: string[];
}

export interface TLectureSelected {
  year: number;
  postgraduate: { spring: string[]; fall: string[] };
  undergraduate: { spring: string[]; fall: string[] };
}
