import { Navbar } from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { ITEMS_NAME } from "./constants/URLs";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";

function App() {
  const { ref } = useFocusable({
    focusKey: ITEMS_NAME.APP,
    saveLastFocusedChild: true,
    trackChildren: true,
    autoRestoreFocus: true,
  });

  return (
    <div ref={ref}>
      <Navbar focusKey={ITEMS_NAME.NAVBAR} />
      <Outlet />
    </div>
  );
}

export default App;
