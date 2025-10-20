import { useFocusable, FocusContext } from "@noriginmedia/norigin-spatial-navigation";
import React from "react";
import type { MediaProps, UnifiedMedia } from "../../pages/mediaDetails/types/MediaInformationType";
import { scrollToElement } from "../../utils";
import { MediaItem } from "./components/MediaItem";
import { useMouseEdgeScroll } from "./hooks/useMouseEdgeScroll";
import { MediaContainer, MediaScroll, MediaWrapper } from "./style/MediaContent.styled";

export function MediaContentRow({ sizeH, sizeW, items, title, onFocus, onMediaFocus }: MediaProps<UnifiedMedia>) {
  const { ref, focusKey } = useFocusable({
    onFocus,
    trackChildren: true,
    saveLastFocusedChild: true,
  });

  const scrollRef = React.useRef<HTMLDivElement | null>(null);

  const onRowFocus = React.useCallback((props?: { x?: number; y?: number }) => scrollToElement(scrollRef, props), [scrollRef]);

  useMouseEdgeScroll(scrollRef);

  return (
    <FocusContext.Provider value={focusKey}>
      <MediaContainer ref={ref}>
        <p>{title}</p>
        <MediaScroll ref={scrollRef}>
          <MediaWrapper>
            {items.map((media: UnifiedMedia) => (
              <MediaItem
                sizeH={sizeH}
                sizeW={sizeW}
                type={media.type}
                id={media.id}
                key={`${media.type}-${media.title}-${media.id}`}
                title={media.title}
                poster_path={sizeW === "440px" ? media.backdrop_path || "" : media.poster_path || ""}
                overview={media.overview || ""}
                focusKey={`${media.title}-${media.id}`}
                onFocus={(layout) => {
                  if (scrollRef.current) {
                    const scrollX = layout.x - scrollRef.current.clientWidth / 2 + layout.width / 2;
                    onRowFocus({ x: scrollX });
                  }
                  onMediaFocus?.(media);
                }}
              />
            ))}
            <div style={{ minWidth: "30px" }} />
          </MediaWrapper>
        </MediaScroll>
      </MediaContainer>
    </FocusContext.Provider>
  );
}
