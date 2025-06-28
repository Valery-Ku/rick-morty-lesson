import { Collapse } from "../../Collapse";
import { CharacterList } from "./CharacterList";
import { useEpisodes } from "../hooks/useEpisodes";

export const EpisodeList = () => {
  const { episodes } = useEpisodes();

  return (
    <section className="episode-list-wrapper">
      <h1 className="list-title">The Rick and Morty</h1>
      <Collapse
  title="Episodes"
  className="episodes-dropdown"
  style={{ cursor: "pointer" }}
  content={episodes.map((episode) => (
    <Collapse
      key={episode.id}
      className="episode"
      title={`${episode.episode}: ${episode.name}`}
      style={{ cursor: "pointer" }}
      content={
        <CharacterList
          style={{ cursor: "default" }}
          ids={episode.characters.map((character) =>
            character.split("/").pop()
          )}
        />
      }
    />
  ))}
/>
    </section>
  );
};
