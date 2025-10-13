import { popularChannels } from "../../../constants/Chanels";
import type { HomeProp } from "../../../MovieType";
import { TopFiveContainer } from "../style/Home.styled";
import ChannelCard from "./ChannelCard";
import { FocusContext, useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import React from "react";

export function TopFive({ onFocus }: HomeProp) {
  const { ref, focusKey } = useFocusable({
    onFocus,
    focusable: true,
    trackChildren: false,
    saveLastFocusedChild: true,
    autoRestoreFocus: true,
  });
  const scrollRef = React.useRef<HTMLDivElement | null>(null);

  const onChannelFocus = React.useCallback(
    ({ y }: { y: number }) => {
      return scrollRef.current?.scrollTo({
        top: y,
        behavior: "smooth",
      });
    },
    [scrollRef]
  );
  return (
    <FocusContext.Provider value={focusKey}>
      <TopFiveContainer ref={ref}>
        <h2>Top 5 Channels</h2>
        {popularChannels.map((item) => (
          <ChannelCard key={item.name} channel={item} focusKey={item.name} onFocus={onChannelFocus} />
        ))}
      </TopFiveContainer>
    </FocusContext.Provider>
  );
}
