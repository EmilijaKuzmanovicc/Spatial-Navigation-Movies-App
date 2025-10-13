import { useFocusable, FocusContext } from "@noriginmedia/norigin-spatial-navigation";
import { useState, useEffect, useCallback } from "react";
import { getPopularMoviesAndSeries } from "../../../api/MovieApi";
import { MediaContentRow } from "../../../components/mediaContentRow/MediaContentRow";
import type { HomeProp, DataMedia } from "../../../MovieType";
import { HomePopularContainer } from "../style/Home.styled";

export function HomePopular({ onFocus }: HomeProp) {
  const [dataMedia, setDataMedia] = useState<DataMedia>();
  const { ref, focusSelf, focusKey } = useFocusable({ onFocus });

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

  useEffect(() => {
    focusSelf();
  }, [focusSelf, dataMedia]);

  return (
    <FocusContext.Provider value={focusKey}>
      <HomePopularContainer ref={ref}>{dataMedia ? dataMedia.map((data) => <MediaContentRow key={data.name} title={data.name} items={data.items} onFocus={onRowFocus} />) : <div></div>}</HomePopularContainer>
    </FocusContext.Provider>
  );
}
