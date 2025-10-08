import type { ChannelsProps } from "../Types/HomeTypes";
import { ChannelCartContainer } from "../style/Home.styled";

export function ChannelCard({ channel }: ChannelsProps) {
  console.log(channel);
  return (
    <ChannelCartContainer>
      <img src={channel.image} alt={channel.name}></img>
      <h5 style={{ color: "white" }}>{channel.name}</h5>
    </ChannelCartContainer>
  );
}
export default ChannelCard;
