import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { initializeSpatialNavigation } from "./app/spatialNavigation/SpatialNavigation";
import { GlobalStyle, GlobalStyleDiv } from "./app/style/App.styled";
import { Router } from "./app/routers/Routers";

initializeSpatialNavigation();

createRoot(document.getElementById("root")!).render(
  <>
    <GlobalStyle />
    <GlobalStyleDiv>
      <RouterProvider router={Router} />
    </GlobalStyleDiv>
  </>
);
