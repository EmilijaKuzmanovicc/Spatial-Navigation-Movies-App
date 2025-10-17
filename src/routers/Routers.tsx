import { createBrowserRouter } from "react-router-dom";
import { ITEMS_NAME, PATHS } from "../constants/URLs";
import App from "../App";
import { Home } from "../pages/home/Home";
import { Movies } from "../pages/movies/Movies";
import { Series } from "../pages/series/Series";
import { MediaDetails } from "../pages/mediaDetails/MediaDetails";

export const Router = createBrowserRouter([
  {
    path: PATHS.HOME,
    element: <App />,
    children: [
      {
        path: PATHS.HOME,
        element: <Home />,
      },
      {
        path: PATHS.MOVIES,
        element: <Movies />,
      },
      {
        path: PATHS.SERIES,
        element: <Series />,
      },
    ],
  },
  {
    path: PATHS.MEDIA_DETAIL,
    element: <MediaDetails focusKey={ITEMS_NAME.MEDIA_DETAILS} />,
  },
]);
