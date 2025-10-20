import { useEffect, useState } from "react";
import type { UnifiedMedia } from "../../pages/mediaDetails/types/MediaInformationType";

export const useSelectMedia = (focusedMedia?: UnifiedMedia) => {
  const [selectedMedia, setSelectedMedia] = useState<UnifiedMedia | null>(null);

  useEffect(() => {
    if (focusedMedia) {
      setSelectedMedia(focusedMedia);
    }
  }, [focusedMedia]);

  return {
    selectedMedia,
    setSelectedMedia,
  };
};
