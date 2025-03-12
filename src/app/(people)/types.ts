export interface TMember {
  uid: number;
  name: string;
  alias: string | null;
  image: string | null;
  email: string;
  history: { period: string; information: string }[];
}
