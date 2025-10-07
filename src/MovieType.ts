export interface PaginatedResponse<T> {
  results: T[];
}
export interface Movie {
  id: number;
  title: string;
  poster_path?: string;
  overview?: string;
}
export interface Series {
  id: number;
  name: string;
  poster_path?: string;
  overview?: string;
}

export interface Genre {
  id: number;
  name: string;
}
