import { scrollToElement, popularChannels } from "../../../utils";
import type { HomeProp } from "../../movies/Types/MovieType";
import { TopFiveContainer } from "../style/Home.styled";
import ChannelCard from "./ChannelCard";
import { FocusContext, useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import React from "react";

export function TopFive({ onFocus }: HomeProp) {
  const { ref, focusKey } = useFocusable({
    onFocus,
    focusable: true,
    trackChildren: true,
    saveLastFocusedChild: true,
    autoRestoreFocus: true,
  });
  const scrollRef = React.useRef<HTMLElement | null>(null);

  const onRowFocus = React.useCallback((props?: { x?: number; y?: number }) => scrollToElement(scrollRef, props), [scrollRef]);

  return (
    <FocusContext.Provider value={focusKey}>
      <TopFiveContainer ref={ref}>
        <h2>Top 5 Channels</h2>
        {popularChannels.map((item, index) => (
          <ChannelCard index={index} key={item.name} channel={item} focusKey={item.name} onFocus={onRowFocus} />
        ))}
      </TopFiveContainer>
    </FocusContext.Provider>
  );
}
