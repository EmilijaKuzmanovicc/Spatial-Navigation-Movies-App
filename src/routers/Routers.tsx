import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/home/Home";
import { MediaDetails } from "../pages/mediaDetails/MediaDetails";
import { Movies } from "../pages/movies/Movies";
import { Series } from "../pages/series/Series";
import { PATHS, ITEMS_NAME } from "../utils";

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
