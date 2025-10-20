export const URL_IMAGES = {
  BACKPICTURE: "/assets/images/backpicture.jpg",
  ARENA_LOGO: "/assets/images/Arena_Verlag_Logo.png",
  RARAMOUNT_LOGO: "/assets/images/Paramount_Network.png",
  REDE_LOGO: "/assets/images/Rede_Telecine_vertical_logo.png",
  RTS1_LOGO: "/assets/images/RTS_1_logo_2019.png",
  SONY_LOGO: "/assets/images/Sony_Movies_Logo.png",
  BACK_ICON: "/assets/images/back_icon.png",
  PLAY: "/assets/images/play.png",
  LOGO: "/assets/images/logo.png",
  IMAGE_NOT_FOUND: "/assets/images/no_poster.png",
};

export const URLS_API = {
  CREDITS: "/credits",
  MOVIE_DETAIL: `/movie`,
  SERIES_DETAIL: "/tv",
  GET_MOVIES: `/movie/popular`,
  GET_SERIES: `/tv/popular`,
  GET_MOVIE_GENRES_LIST: `/genre/movie/list`,
  GET_MOVIES_BY_GENRES: `/discover/movie`,
  GET_SERIES_GENRES_LIST: `/genre/tv/list`,
  GET_SERIES_BY_GENRES: `discover/tv`,
  IMAGES: `/images`,
} as const;

export const PATHS = {
  HOME: `/`,
  MOVIES: `/movies`,
  SERIES: `/series`,
  MOVIE_DETAIL: `/:type`,
  MOVIE_DETAIL_ID: `/movies/:id`,
  SERIES_DETAIL_ID: `/series/:id`,
  MEDIA_DETAIL: `/:type/:id`,
} as const;
