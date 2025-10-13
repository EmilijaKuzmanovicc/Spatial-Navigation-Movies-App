import { HomeContainer } from "./style/Home.styled";
import { HomePopular } from "./components/HomePopular";
import { FocusContext, useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { useCallback } from "react";
import { TopFive } from "./components/TopFive";
import type { FocusKeyProps } from "../../MovieType";

export function Home({ focusKey: focusKeyParam }: FocusKeyProps) {
  const { ref, focusKey } = useFocusable({
    focusable: true,
    trackChildren: true,
    saveLastFocusedChild: true,
    autoRestoreFocus: true,
    focusKey: focusKeyParam,
    onArrowPress: () => true,
  });

  const onRowFocus = useCallback(
    ({ x }: { x: number }) => {
      ref.current.scrollTo({
        left: x,
        behavior: "smooth",
      });
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
