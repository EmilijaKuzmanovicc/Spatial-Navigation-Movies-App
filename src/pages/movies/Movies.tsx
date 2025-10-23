import { useFocusable, FocusContext } from "@noriginmedia/norigin-spatial-navigation";
import React, { useEffect } from "react";
import { DATA_TYPE, useSelectMedia, useMediaNavigation, scrollToElement, useVerticalMouseScroll, useMediaWithGenres } from "../../utils";
import type { GenresWithMediaProps } from "../mediaDetails/types/MediaInformationType";
import { MediaShortInformation } from "./components/MediaShortInformation";
import { DetailPosterPicture, MoviesContainer, MediaListContainer, MediaListScroll } from "./style/Movies.styles";
import { MediaContentRow } from "../../components/mediaContentRow";

export function Movies() {
  const genresWithMovies: GenresWithMediaProps[] = useMediaWithGenres(DATA_TYPE.MOVIE);
  const { selectedMedia: selectedMovie, setSelectedMedia: onMovieFocus } = useSelectMedia();
  const { restoreFocus } = useMediaNavigation();

  const { ref, focusKey } = useFocusable({
    focusable: true,
    trackChildren: true,
    autoRestoreFocus: true,
  });

  useEffect(() => {
    restoreFocus();
  }, [restoreFocus]);

  const onRowFocus = React.useCallback((props?: { x?: number; y?: number }) => scrollToElement(ref, props), [ref]);
  const scrollRef = React.useRef<HTMLDivElement | null>(null);
  useVerticalMouseScroll(scrollRef);

  return (
    <FocusContext.Provider value={focusKey}>
      {selectedMovie === null ? <></> : <DetailPosterPicture $picture={selectedMovie?.backdrop_path} />}
      <MoviesContainer>
        <MediaShortInformation title={selectedMovie === null ? "Select a movie" : selectedMovie?.title} overview={selectedMovie === null ? "Details of the selected movie will appear here." : selectedMovie.overview === undefined ? "No info of overview" : selectedMovie.overview} />
        <MediaListContainer>
          <MediaListScroll
            ref={(el) => {
              ref.current = el;
              scrollRef.current = el;
            }}
          >
            {genresWithMovies.map((movies) => {
              return <MediaContentRow sizeH="266px" sizeW="440px" key={movies.genre} items={movies.media} title={movies.genre} onFocus={onRowFocus} onMediaFocus={onMovieFocus} />;
            })}
          </MediaListScroll>
        </MediaListContainer>
      </MoviesContainer>
    </FocusContext.Provider>
  );
}
