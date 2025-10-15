import { useEffect, useState } from "react";
import type { ActorsDirectorProps, MediaInformationProps } from "../types/MediaInformationType";
import { getActorsAndDirector } from "../../../api/MovieApi";

export function Casts({ movie, type }: MediaInformationProps) {
  const [movieDirector, setMovieDirector] = useState<string | undefined>();
  const [movieCast, setMovieCast] = useState<string[] | undefined>([]);

  const fetchData = async () => {
    const crew: ActorsDirectorProps | null = await getActorsAndDirector(movie.id.toString(), type);
    setMovieDirector(crew?.director);
    setMovieCast(crew?.actors);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h5>
        {movie.type === "movie" ? (
          <>
            <strong>Director:</strong> {movieDirector || "No info for director"}
          </>
        ) : (
          <>
            <strong>Created by:</strong> {movie.created_by?.length ? movie.created_by.map((c) => c.name).join(", ") : "No info for creator"}
          </>
        )}
      </h5>

      <h5>
        <strong>Cast:</strong> {movieCast?.length ? movieCast.join(", ") : "No info for cast"}
      </h5>
    </>
  );
}
