import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GlobalStyle, GlobalStyleDiv } from "./style/App.styled.ts";
import { RouterProvider } from "react-router-dom";
import { Router } from "./routers/Routers.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyle />
    <GlobalStyleDiv>
      <RouterProvider router={Router} />
    </GlobalStyleDiv>
  </StrictMode>
);
