import { FocusContext, useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import type { FocusKeyProps, GenresWithMoviesProps, UnifiedMedia } from "../../MovieType";
import { useCallback, useEffect, useState } from "react";
import { MediaContentRow } from "../../components/mediaContentRow/MediaContentRow";
import { DetailPosterPicture, MediaListContainer, MediaListScroll, MediaListWraper, MediaShortInformation, MoviesContainer } from "./style/Movies.styles";
import { getGenresWithMovies } from "../../api/MovieApi";

export function Movies({ focusKey: focusKeyParam }: FocusKeyProps) {
  const { ref, focusSelf, focusKey } = useFocusable({
    focusable: true,
    trackChildren: true,
    autoRestoreFocus: true,
    focusKey: focusKeyParam,
    onArrowPress: () => true,
  });

  const [genresWithMovies, setGenresWithMovies] = useState<GenresWithMoviesProps[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<UnifiedMedia | null>(null);

  const fetchMoviesSeries = async () => {
    const listgenre = await getGenresWithMovies();
    setGenresWithMovies(listgenre);
    const firstMovie = listgenre[0]?.movies[0];
    if (firstMovie) setSelectedMovie(firstMovie);
  };

  useEffect(() => {
    fetchMoviesSeries();
  }, []);

  const onRowFocus = useCallback(
    ({ y }: { y: number }) => {
      ref.current.scrollTo({
        top: y,
        behavior: "smooth",
      });
    },
    [ref]
  );

  const onMovieFocus = useCallback((movie: UnifiedMedia) => {
    setSelectedMovie(movie);
  }, []);

  useEffect(() => {
    focusSelf();
  }, [focusSelf]);

  return (
    <>
      <FocusContext.Provider value={focusKey}>
        <DetailPosterPicture $picture={selectedMovie?.backdrop_path} />
        <MoviesContainer>
          <MediaShortInformation>
            <h1>{selectedMovie?.title}</h1>
            <h3>{selectedMovie?.overview}</h3>
          </MediaShortInformation>
          <MediaListContainer>
            <MediaListScroll ref={ref}>
              <MediaListWraper>
                {genresWithMovies.map((movies) => {
                  return <MediaContentRow sizeH="266px" sizeW="440px" key={movies.genre} items={movies.movies} title={movies.genre} onFocus={onRowFocus} onMediaFocus={onMovieFocus} />;
                })}
              </MediaListWraper>
            </MediaListScroll>
          </MediaListContainer>
        </MoviesContainer>
      </FocusContext.Provider>
    </>
  );
}
