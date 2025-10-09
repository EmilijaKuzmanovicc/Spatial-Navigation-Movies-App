import { init } from "@noriginmedia/norigin-spatial-navigation";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./home/Home";
import { useState } from "react";
import { Movies } from "./movies/Movies";
import { Series } from "./series/Series";

init({
  debug: false,
  visualDebug: false,
});

function App() {
  const [activePage, setActivePage] = useState("HOME");

  return (
    <>
      <Navbar onSelect={setActivePage} />
      <div style={{ display: activePage === "HOME" ? "block" : "none" }}>
        <Home focusKey="HOME" />
      </div>
      <div style={{ display: activePage === "MOVIES" ? "block" : "none" }}>
        <Movies focusKey="MOVIES" />
      </div>
      <div style={{ display: activePage === "SERIES" ? "block" : "none" }}>
        <Series focusKey="SERIES" />
      </div>
    </>
  );
}

export default App;
