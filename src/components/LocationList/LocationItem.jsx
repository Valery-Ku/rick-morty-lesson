export const LocationItem = ({ location }) => {
  return (
    <div className="location-item" style={{ cursor: "pointer" }}>
      <p>Name: {location.name}</p>
      <p>Type: {location.type}</p>
      <p>Dimension: {location.dimension}</p>
    </div>
  );
};