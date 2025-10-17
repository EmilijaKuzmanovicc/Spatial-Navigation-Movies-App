import { HomeContainer } from "./style/Home.styled";
import { HomePopular } from "./components/HomePopular";
import { FocusContext, useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { useCallback } from "react";
import { TopFive } from "./components/TopFive";

export function Home() {
  const { ref, focusKey } = useFocusable({
    focusable: true,
    trackChildren: true,
    saveLastFocusedChild: true,
    autoRestoreFocus: true,
    onArrowPress: () => true,
  });
  const onRowFocus = useCallback(
    ({ x }: { x: number }) => {
      if (ref.current) {
        ref.current.scrollTo({
          left: x,
          behavior: "smooth",
        });
      }
    },
    [ref]
  );

  return (
    <FocusContext.Provider value={focusKey}>
      <HomeContainer ref={ref}>
        <HomePopular onFocus={onRowFocus} />
        <TopFive onFocus={onRowFocus} />
      </HomeContainer>
    </FocusContext.Provider>
  );
}
