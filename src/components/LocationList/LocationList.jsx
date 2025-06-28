import { Collapse } from "../Collapse";
import { useLocations } from "./hooks/useLocations";
import "./Location.css";

export const Locations = () => {
  const { locations, isLoading } = useLocations([]);

  return (
    <section className="location-list-wrapper" style={{ cursor: "pointer" }}>
      <Collapse
        title="Locations"
        className="locations-dropdown"
        content={
          <div className="locations-list">
            {locations.map((location) => (
              <Collapse
                key={location.id}
                className="location"
                style={{ cursor: "default" }}
                title={
                  <>
                    <div>
                      <span style={{ fontWeight: "normal" }}>
                        Name: {location.name}
                      </span>
                    </div>
                    <div>
                      <span style={{ fontWeight: "normal" }}>
                        Type: {location.type}
                      </span>
                    </div>
                    <div>
                      <span style={{ fontWeight: "normal" }}>
                        Dimension: ({location.dimension})
                      </span>
                    </div>
                  </>
                }
                content={null}
              />
            ))}
          </div>
        }
      />
    </section>
  );
};
