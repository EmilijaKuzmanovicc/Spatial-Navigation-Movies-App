import { FocusContext, useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { useCallback } from "react";
import { scrollToElement } from "../../utils";
import { HomePopular } from "./components/HomePopular";
import { TopFive } from "./components/TopFive";
import { HomeContainer } from "./style/Home.styled";

export function Home() {
  const { ref, focusKey } = useFocusable({
    focusable: true,
    trackChildren: true,
    saveLastFocusedChild: true,
    autoRestoreFocus: true,
    onArrowPress: () => true,
  });

  const onRowFocus = useCallback((props?: { x?: number; y?: number }) => scrollToElement(ref, props), [ref]);

  return (
    <FocusContext.Provider value={focusKey}>
      <HomeContainer ref={ref}>
        <HomePopular onFocus={onRowFocus} />
        <TopFive onFocus={onRowFocus} />
      </HomeContainer>
    </FocusContext.Provider>
  );
}
