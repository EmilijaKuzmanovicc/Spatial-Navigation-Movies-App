import { useCallback, useEffect, useState } from "react";
import { HomePopularContainer } from "../style/Home.styled";
import { getPopularMoviesAndSeries } from "../../api/MovieApi";
import { type DataMedia, type HomeProp } from "../../MovieType";
import { FocusContext, useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { MediaContentRow } from "../../components/mediaContentRow/MediaContentRow";

export function HomePopular({ onFocus }: HomeProp) {
  const [dataMedia, setDataMedia] = useState<DataMedia>();

  const fetchMoviesSeries = async () => {
    const data = await getPopularMoviesAndSeries();

    setDataMedia(data);
  };

  useEffect(() => {
    fetchMoviesSeries();
  }, []);

  const { ref, focusSelf, focusKey } = useFocusable({ onFocus });

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
