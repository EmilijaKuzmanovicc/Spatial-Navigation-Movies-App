import { useFocusable, FocusContext } from "@noriginmedia/norigin-spatial-navigation";
import React, { useEffect } from "react";
import { DATA_TYPE, useSelectMedia, useMediaNavigation, scrollToElement, useVerticalMouseScroll, useMediaWithGenres } from "../../utils";
import type { GenresWithMediaProps } from "../mediaDetails/types/MediaInformationType";
import { MediaShortInformation } from "../movies/components/MediaShortInformation";
import { DetailPosterPicture, MoviesContainer, MediaListContainer, MediaListScroll } from "../movies/style/Movies.styles";
import { MediaContentRow } from "../../components/mediaContentRow";

export function Series() {
  const genresWithSeries: GenresWithMediaProps[] = useMediaWithGenres(DATA_TYPE.SERIES);

  const { selectedMedia: selectedSeries, setSelectedMedia: onSeriesFocus } = useSelectMedia();
  const { restoreFocus } = useMediaNavigation();

  const { ref, focusKey } = useFocusable({
    focusable: true,
    trackChildren: true,
    autoRestoreFocus: true,
    onArrowPress: () => true,
  });

  const onRowFocus = React.useCallback((props?: { x?: number; y?: number }) => scrollToElement(ref, props), [ref]);

  const scrollRef = React.useRef<HTMLDivElement | null>(null);
  useVerticalMouseScroll(scrollRef);
  useEffect(() => {
    restoreFocus();
  }, [restoreFocus]);

  return (
    <FocusContext.Provider value={focusKey}>
      {selectedSeries === null ? <></> : <DetailPosterPicture $picture={selectedSeries?.backdrop_path} />}
      <MoviesContainer>
        <MediaShortInformation title={selectedSeries === null ? "Select a series" : selectedSeries?.title} overview={selectedSeries === null ? "Details of the selected series will appear here." : selectedSeries.overview === undefined ? "No info of overview" : selectedSeries.overview} />
        <MediaListContainer>
          <MediaListScroll
            ref={(el) => {
              ref.current = el;
              scrollRef.current = el;
            }}
          >
            {genresWithSeries.map((series) => {
              return <MediaContentRow sizeH="266px" sizeW="440px" key={series.genre} items={series.media} title={series.genre} onFocus={onRowFocus} onMediaFocus={onSeriesFocus} />;
            })}
          </MediaListScroll>
        </MediaListContainer>
      </MoviesContainer>
    </FocusContext.Provider>
  );
}
