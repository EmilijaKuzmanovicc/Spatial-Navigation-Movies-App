import { useFocusable, FocusContext } from "@noriginmedia/norigin-spatial-navigation";
import { useState, useEffect, useCallback } from "react";
import { getPopularMoviesAndSeries } from "../../../api/MovieApi";
import { MediaContentRow } from "../../../components/mediaContentRow";
import { HomePopularContainer } from "../style/Home.styled";
import type { HomeProp } from "../../movies/Types/MovieType";
import type { MediaSection } from "../../mediaDetails/types/MediaInformationType";
import { scrollToElement, useMediaNavigation } from "../../../utils";

export function HomePopular({ onFocus }: HomeProp) {
  const [dataMedia, setDataMedia] = useState<MediaSection[]>();
  const { ref, focusKey } = useFocusable({ onFocus });
  const { restoreFocus } = useMediaNavigation();
  const onRowFocus = useCallback((props?: { x?: number; y?: number }) => scrollToElement(ref, props), [ref]);

  const fetchMoviesSeries = async () => {
    const data = await getPopularMoviesAndSeries();
    setDataMedia(data);
  };

  useEffect(() => {
    fetchMoviesSeries();
  }, []);

  useEffect(() => {
    restoreFocus();
  }, [restoreFocus]);

  return (
    <FocusContext.Provider value={focusKey}>
      <HomePopularContainer ref={ref}>{dataMedia ? dataMedia.map((data) => <MediaContentRow sizeH="300px" sizeW="230px" key={data.name} title={data.name} items={data.items} onFocus={onRowFocus} />) : <div></div>}</HomePopularContainer>
    </FocusContext.Provider>
  );
}
