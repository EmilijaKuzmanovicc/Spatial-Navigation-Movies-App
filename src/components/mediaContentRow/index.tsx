import { FocusContext, useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import type { MediaProps, UnifiedMedia } from "../../pages/mediaDetails/types/MediaInformationType";
import { scrollToElement } from "../../utils";
import { useCallback, useRef } from "react";
import { useMouseEdgeScroll } from "./hooks/useMouseEdgeScroll";
import { MediaContainer, MediaScroll, MediaWrapper } from "./style/MediaContent.styled";
import { MediaItem } from "./components/MediaItem";
import { CalculateScrollX } from "./utils/CalculateScrollX";

export function MediaContentRow({ sizeH, sizeW, genre, items, title, onFocus, onMediaFocus }: MediaProps<UnifiedMedia>) {
  const { ref, focusKey } = useFocusable({
    onFocus,
    trackChildren: true,
    saveLastFocusedChild: true,
  });

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const onRowFocus = useCallback((props?: { x?: number; y?: number }) => scrollToElement(scrollRef, props), [scrollRef]);
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
                key={`${genre}-${media.title}-${media.id}`}
                title={media.title}
                poster_path={sizeW === "440px" ? media.backdrop_path || "" : media.poster_path || ""}
                overview={media.overview || "No info of overview"}
                focusKey={`${media.title}-${media.id}`}
                onFocus={(layout) => {
                  if (!scrollRef) return;
                  if (scrollRef.current) {
                    const scrollX = CalculateScrollX(layout, scrollRef);
                    onRowFocus({ x: scrollX! });
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
