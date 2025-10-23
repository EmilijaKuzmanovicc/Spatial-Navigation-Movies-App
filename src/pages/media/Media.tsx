import { FocusContext, useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { scrollToElement, useMediaNavigation, useMediaWithGenres, useSelectMedia, useVerticalMouseScroll } from "../../utils";
import type { GenresWithMediaProps } from "../mediaDetails/types/MediaInformationType";
import { useCallback, useEffect, useRef } from "react";
import { DetailPosterPicture, MoviesContainer } from "./style/Movies.styles";
import { MediaShortInformation } from "./components/MediaShortInformation";
import { MediaListContainer, MediaListScroll } from "../mediaDetails/style/MediaDetails.styled";
import { MediaContentRow } from "../../components/mediaContentRow";
import type { MediaProp } from "./types/MovieType";

export function Media({ type }: MediaProp) {
  const mediaWithGenres: GenresWithMediaProps[] = useMediaWithGenres(type);
  const { selectedMedia, setSelectedMedia: onMediaFocus } = useSelectMedia();
  const { restoreFocus } = useMediaNavigation();

  const { ref, focusKey, focusSelf } = useFocusable({
    focusable: true,
    trackChildren: true,
    autoRestoreFocus: false,
    focusKey: `${type}-focus`,
  });

  const scrollRef = useRef<HTMLDivElement | null>(null);
  useVerticalMouseScroll(scrollRef);
  console.log(ref);
  const onRowFocus = useCallback((props?: { x?: number; y?: number }) => scrollToElement(ref, props), [ref]);

  useEffect(() => {
    onMediaFocus(null);

    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [type, onMediaFocus, focusSelf]);

  useEffect(() => {
    restoreFocus();
  }, [restoreFocus]);

  return (
    <FocusContext.Provider value={focusKey}>
      {selectedMedia && <DetailPosterPicture $picture={selectedMedia.backdrop_path} />}
      <MoviesContainer>
        <MediaShortInformation title={selectedMedia ? selectedMedia.title : `Select a ${type}`} overview={selectedMedia ? selectedMedia.overview ?? "No info of overview" : `Details of the selected ${type} will appear here.`} />
        <MediaListContainer>
          <MediaListScroll
            ref={(el) => {
              ref.current = el;
              scrollRef.current = el;
            }}
          >
            {mediaWithGenres.map((media) => (
              <MediaContentRow key={media.genre} genre={media.genre} sizeH="266px" sizeW="440px" items={media.media} title={media.genre} onFocus={onRowFocus} onMediaFocus={onMediaFocus} />
            ))}
          </MediaListScroll>
        </MediaListContainer>
      </MoviesContainer>
    </FocusContext.Provider>
  );
}
