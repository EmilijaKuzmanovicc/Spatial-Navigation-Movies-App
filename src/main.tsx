import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyle, GlobalStyleDiv } from "./style/App.styled.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyle />
    <GlobalStyleDiv>
      <App />
    </GlobalStyleDiv>
  </StrictMode>
);
