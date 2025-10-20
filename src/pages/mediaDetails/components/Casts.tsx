import { useEffect, useState } from "react";
import type { ActorsDirectorProps, MediaInformationProps } from "../types/MediaInformationType";
import { getActorsAndDirector } from "../../../api/MovieApi";
import { DATA_TYPE } from "../../../utils";

export function Casts({ media, type }: MediaInformationProps) {
  const [movieDirector, setMovieDirector] = useState<string | undefined>();
  const [movieCast, setMovieCast] = useState<string[] | undefined>([]);

  const fetchData = async () => {
    const crew: ActorsDirectorProps | null = await getActorsAndDirector(media.id.toString(), type);
    setMovieDirector(crew?.director);
    setMovieCast(crew?.actors);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h5>
        {media.type === DATA_TYPE.MOVIE ? (
          <>
            <strong>Director:</strong> {movieDirector || "No info for director"}
          </>
        ) : (
          <>
            <strong>Created by:</strong> {media.created_by?.length ? media.created_by.map((c) => c.name).join(", ") : "No info for creator"}
          </>
        )}
      </h5>

      <h5 style={{ height: "66px" }}>
        <strong>Cast:</strong> {movieCast!.join(", ")}
      </h5>
    </>
  );
}
