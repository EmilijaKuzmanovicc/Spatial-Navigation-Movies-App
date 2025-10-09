export const URL_IMAGES = {
  BACKPICTURE: "/assets/images/backpicture.jpg",
  SHINDIRI_STURDIO_LOGO: "/assets/images/shindiriStudioLogo.png",
  LOGO_DESCRIPTION: "/assets/images/logoDescription.png",
};

export const URLS_API = {
  GET_MOVIES: `/movie/popular`,
  GET_SERIES: `/tv/popular`,
  GET_MOVIE_GENRES_LIST: `/genre/movie/list`,
  GET_MOVIES_BY_GENRES: `/discover/movie`,
  GET_SERIES_GENRES_LIST: `/genre/tv/list`,
  GET_SERIES_BY_GENRES: `discover/tv`,
} as const;

export const NAVBAR_ITEMS = {
  HOME: "HOME",
  MOVIES: "MOVIES",
  SERIES: "SERIES",
};
