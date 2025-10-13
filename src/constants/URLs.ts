export const URL_IMAGES = {
  BACKPICTURE: "/assets/images/backpicture.jpg",
  SHINDIRI_STURDIO_LOGO: "/assets/images/shindiriStudioLogo.png",
  LOGO_DESCRIPTION: "/assets/images/logoDescription.png",
  ARENA_LOGO: "/assets/images/Arena_Verlag_Logo.png",
  RARAMOUNT_LOGO: "/assets/images/Paramount_Network.png",
  REDE_LOGO: "/assets/images/Rede_Telecine_vertical_logo.png",
  RTS1_LOGO: "/assets/images/RTS_1_logo_2019.png",
  SONY_LOGO: "/assets/images/Sony_Movies_Logo.png",
  BACK_ICON: "/assets/images/back_icon.png",
  PLAY: "/assets/images/play.png",
};

export const URLS_API = {
  CREDITS: "/credits",
  MOVIE_DITAIL: `/movie`,
  SERIES_DITAIL: "/tv",
  GET_MOVIES: `/movie/popular`,
  GET_SERIES: `/tv/popular`,
  GET_MOVIE_GENRES_LIST: `/genre/movie/list`,
  GET_MOVIES_BY_GENRES: `/discover/movie`,
  GET_SERIES_GENRES_LIST: `/genre/tv/list`,
  GET_SERIES_BY_GENRES: `discover/tv`,
} as const;

export const ITEMS_NAME = {
  HOME: "HOME",
  MOVIES: "MOVIES",
  SERIES: "SERIES",
  NAVBAR: "NAVBAR",
  MEDIA_DETAILS: "MEDIA_DETAILS",
};

export const PATHS = {
  MOVIE_TYPE: "movie",
  SERIES_TYPE: "series",
  HOME: `/`,
  MOVIES: `/movies`,
  SERIES: `/series`,
  MOVIE_DETAIL: `/:type`,
  MOVIE_DETAIL_ID: `/movies/:id`,
  SERIES_DETAIL_ID: `/series/:id`,
  MEDIA_DETAIL: `/:type/:id`,
} as const;
