export interface TProject {
  uid: number;
  title: string;
  organization: string;
  ongoing: number;
  period: string;
  information: string;
  article: { title: string; url: string }[];
}
