import { init } from "@noriginmedia/norigin-spatial-navigation";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./home/Home";
import { useState } from "react";
import { Movies } from "./movies/Movies";
import { Series } from "./series/Series";
import { ITEMS_NAME } from "./constants/URLs";

init({
  debug: true,
  visualDebug: false,
});

function App() {
  const [activePage, setActivePage] = useState<string>(ITEMS_NAME.HOME);
  return (
    <>
      <Navbar onSelect={setActivePage} />
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
