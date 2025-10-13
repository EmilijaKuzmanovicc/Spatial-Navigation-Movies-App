import { FocusContext, useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import * as React from "react";
import type { MediaProps, UnifiedMedia } from "../../MovieType";
import { MediaItem } from "./components/MediaItem";
import { MediaContainer, MediaWrapper } from "./style/MediaContent.styled";

export function MediaContentRow({ items, title, onFocus }: MediaProps<UnifiedMedia>) {
  const { ref, focusKey } = useFocusable({
    onFocus,
    trackChildren: true,
    saveLastFocusedChild: true,
  });

  const scrollRef = React.useRef<HTMLDivElement | null>(null);

  const onMovieFocus = React.useCallback(
    ({ x }: { x: number }) => {
      if (!scrollRef.current) return;
      return scrollRef.current.scrollTo({
        left: x,
        behavior: "smooth",
      });
    },
    [scrollRef]
  );
  return (
    <FocusContext.Provider value={focusKey}>
      <MediaContainer ref={ref}>
        <p>{title}</p>
        <MediaWrapper>
          {items.map((media: UnifiedMedia) => (
            <MediaItem type={media.type} id={media.id} key={media.title} title={media.title} poster_path={media.poster_path ? media.poster_path : ""} overview={media.overview ? media.overview : ""} focusKey={`${media.title}-${media.id}`} onFocus={onMovieFocus} />
          ))}
        </MediaWrapper>
      </MediaContainer>
    </FocusContext.Provider>
  );
}
