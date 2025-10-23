import { createBrowserRouter } from "react-router-dom";
import { Home } from "../../pages/home";
import { MediaDetails } from "../../pages/mediaDetails";
import { PATHS, ITEMS_NAME } from "../../utils";
import { App } from "..";
import { Movies } from "../../pages/movies/Movies";
import { Series } from "../../pages/series/Series";

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
        // element: <Media type={DATA_TYPE.MOVIE} />,
      },
      {
        path: PATHS.SERIES,
        element: <Series />,
        //element: <Media type={DATA_TYPE.SERIES} />,
      },
    ],
  },
  {
    path: PATHS.MEDIA_DETAIL,
    element: <MediaDetails focusKey={ITEMS_NAME.MEDIA_DETAILS} />,
  },
]);
