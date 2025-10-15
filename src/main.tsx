import { createRoot } from "react-dom/client";
import { GlobalStyle, GlobalStyleDiv } from "./style/App.styled.ts";
import { RouterProvider } from "react-router-dom";
import { Router } from "./routers/Routers.tsx";
import "./SpatialNavigation.ts";

createRoot(document.getElementById("root")!).render(
  <>
    <GlobalStyle />
    <GlobalStyleDiv>
      <RouterProvider router={Router} />
    </GlobalStyleDiv>
  </>
);
