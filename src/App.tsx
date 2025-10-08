import { init } from "@noriginmedia/norigin-spatial-navigation";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./home/Home";

init({
  debug: false,
  visualDebug: false,
});
function App() {
  return (
    <>
      <Navbar />
      <Home focusKey="HOME" />
    </>
  );
}

export default App;
