import { init } from "@noriginmedia/norigin-spatial-navigation";
import { Navbar } from "./components/navbar/Navbar";
import { ITEMS_NAME } from "./constants/URLs";
import { useState } from "react";
import { Home } from "./pages/home/Home";
import { Movies } from "./pages/movies/Movies";
import { Series } from "./pages/series/Series";

init({
  debug: true,
  visualDebug: false,
});

function App() {
  const [activePage, setActivePage] = useState<string>(ITEMS_NAME.HOME);

  return (
    <>
      <Navbar onSelect={setActivePage} activeItem={activePage} />
      <div style={{ display: activePage === ITEMS_NAME.HOME ? "block" : "none" }}>
        <Home focusKey={ITEMS_NAME.HOME} />
      </div>
      <div style={{ display: activePage === ITEMS_NAME.MOVIES ? "block" : "none" }}>
        <Movies focusKey={ITEMS_NAME.MOVIES} />
      </div>
      <div style={{ display: activePage === ITEMS_NAME.SERIES ? "block" : "none" }}>
        <Series focusKey={ITEMS_NAME.SERIES} />
      </div>
    </>
  );
}

export default App;
