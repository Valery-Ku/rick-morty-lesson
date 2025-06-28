import { Rick } from "./components/EpisodeList/Rick";
import { EpisodeList } from "./components/EpisodeList/presentational/EpisodeList";
import { Locations } from "./components/LocationList/LocationList";

function App() {
  return (
    <>
      <EpisodeList />
      <Locations/>
    </>
  );
}

export default App;
