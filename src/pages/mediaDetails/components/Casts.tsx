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
  const cratedBy = "first_air_date" in movie ? movie.created_by.map((el) => el.name) : [];

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h5>
        {"release_date" in movie ? (
          <>
            <strong>Director:</strong> {movieDirector || "No info for director"}
          </>
        ) : (
          <>
            <strong>Created by:</strong> {cratedBy.length === 0 ? "No info for creator" : cratedBy}
          </>
        )}
      </h5>

      <h5>
        <strong>Cast: </strong>
        {movieCast!.map((actor, index) => (
          <span key={index}>
            {actor}
            {index < movieCast!.length - 1 ? ", " : ""}
          </span>
        ))}
      </h5>
    </>
  );
}
