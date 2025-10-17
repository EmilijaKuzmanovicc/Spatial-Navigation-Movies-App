import { useFocusable, FocusContext } from "@noriginmedia/norigin-spatial-navigation";
import { useCallback, useEffect, useState } from "react";
import { getGenresWithSeries } from "../../api/MovieApi";
import { MediaContentRow } from "../../components/mediaContentRow/MediaContentRow";
import type { GenresWithMediaProps, UnifiedMedia } from "../../MovieType";
import { DetailPosterPicture, MoviesContainer, MediaShortInformation, MediaListContainer, MediaListScroll, MediaListWraper } from "../movies/style/Movies.styles";

export function Series() {
  const { ref, focusKey } = useFocusable({
    focusable: true,
    trackChildren: true,
    autoRestoreFocus: true,
    onArrowPress: () => true,
  });

  const [genresWithSeries, setGenresWithSeries] = useState<GenresWithMediaProps[]>([]);
  const [selectedSeries, setSelectedSeries] = useState<UnifiedMedia | null>(null);

  const fetchMoviesSeries = async () => {
    const listgenre = await getGenresWithSeries();
    setGenresWithSeries(listgenre);
    const firstMovie = listgenre[0]?.media[0];
    if (firstMovie) setSelectedSeries(firstMovie);
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

  const onMovieFocus = useCallback((series: UnifiedMedia) => {
    setSelectedSeries(series);
  }, []);

  return (
    <>
      <FocusContext.Provider value={focusKey}>
        <DetailPosterPicture $picture={selectedSeries?.backdrop_path} />
        <MoviesContainer>
          <MediaShortInformation>
            <h1>{selectedSeries?.title}</h1>
            <h3>{selectedSeries?.overview}</h3>
          </MediaShortInformation>
          <MediaListContainer>
            <MediaListScroll ref={ref}>
              <MediaListWraper>
                {genresWithSeries.map((series) => {
                  return <MediaContentRow sizeH="266px" sizeW="440px" key={series.genre} items={series.media} title={series.genre} onFocus={onRowFocus} onMediaFocus={onMovieFocus} />;
                })}
              </MediaListWraper>
            </MediaListScroll>
          </MediaListContainer>
        </MoviesContainer>
      </FocusContext.Provider>
    </>
  );
}
