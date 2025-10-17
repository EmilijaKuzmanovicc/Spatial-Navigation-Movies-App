import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import type { ChannelsProps } from "../Types/HomeTypes";
import { ChannelCartContainer, ImageDivStyle } from "../style/Home.styled";

export function ChannelCard({ channel, focusKey, onFocus, index }: ChannelsProps & { index: number }) {
  const { ref, focused } = useFocusable({
    focusKey,
    onFocus,
    onArrowPress: (direction) => {
      return direction === "up" && index === 0 ? false : true;
    },
  });

  return (
    <div ref={ref}>
      <ChannelCartContainer $focused={focused}>
        <ImageDivStyle>
          <img src={channel.image} alt={channel.name} />
        </ImageDivStyle>
        <h5>{channel.name}</h5>
      </ChannelCartContainer>
    </div>
  );
}

export default ChannelCard;
