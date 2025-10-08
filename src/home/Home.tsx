import { HomeContainer } from "./style/Home.styled";
import { HomePopular } from "./components/HomePopular";
import { TopFive } from "./components/TopFive";

export function Home() {
  return (
    <HomeContainer>
      <HomePopular focusKey="HOME" />
      <TopFive />
    </HomeContainer>
  );
}
