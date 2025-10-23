import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { DIRECTION, hoverToFocus } from "../../../utils";
import { ChannelCartContainer, ImageDivStyle } from "../style/Home.styled";
import type { ChannelsProps } from "../Types/HomeTypes";

export function ChannelCard({ channel, focusKey, onFocus, index }: ChannelsProps & { index: number }) {
  const { ref, focused } = useFocusable({
    focusKey,
    onFocus,
    onArrowPress: (direction) => {
      return direction === DIRECTION.UP && index === 0 ? false : true;
    },
  });
  const handleMouseEnter = hoverToFocus(focusKey, () => focused);
  return (
    <div ref={ref}>
      <ChannelCartContainer $focused={focused} onMouseEnter={handleMouseEnter}>
        <ImageDivStyle>
          <img src={channel.image} alt={channel.name} />
        </ImageDivStyle>
        <h5>{channel.name}</h5>
      </ChannelCartContainer>
    </div>
  );
}

export default ChannelCard;
