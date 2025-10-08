import { TopFiveContainer } from "../style/Home.styled";
import { popularChannels } from "../../constants/Chanels";
import ChannelCard from "./ChannelCard";

export function TopFive() {
  return (
    <TopFiveContainer>
      <h2>Top 5 Channels</h2>
      {popularChannels.map((item) => (
        <ChannelCard key={item.name} channel={item} />
      ))}
    </TopFiveContainer>
  );
}
