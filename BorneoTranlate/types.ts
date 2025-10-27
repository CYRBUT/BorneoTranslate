
export enum Language {
  Indonesian = "Indonesian",
  Bakumpai = "Bakumpai",
  Ngaju = "Ngaju",
}

export interface NewsItem {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  date: string;
}

export interface Review {
  id: number;
  username: string;
  email: string;
  message: string;
  rating: number;
  date: string;
}

export interface Comment {
  newsId: number;
  id: number;
  username: string;
  email: string;
  message: string;
  date: string;
}
