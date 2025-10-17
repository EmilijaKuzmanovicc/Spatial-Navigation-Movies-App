import { useFocusable, FocusContext } from "@noriginmedia/norigin-spatial-navigation";
import { useState, useEffect, useCallback } from "react";
import { getPopularMoviesAndSeries } from "../../../api/MovieApi";
import { MediaContentRow } from "../../../components/mediaContentRow/MediaContentRow";
import type { HomeProp, MediaSection } from "../../../MovieType";
import { HomePopularContainer } from "../style/Home.styled";

export function HomePopular({ onFocus }: HomeProp) {
  const [dataMedia, setDataMedia] = useState<MediaSection[]>();
  const { ref, focusKey } = useFocusable({ onFocus });

  const fetchMoviesSeries = async () => {
    const data = await getPopularMoviesAndSeries();
    setDataMedia(data);
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

  return (
    <FocusContext.Provider value={focusKey}>
      <HomePopularContainer ref={ref}>{dataMedia ? dataMedia.map((data) => <MediaContentRow sizeH="300px" sizeW="230px" key={data.name} title={data.name} items={data.items} onFocus={onRowFocus} />) : <div></div>}</HomePopularContainer>
    </FocusContext.Provider>
  );
}
