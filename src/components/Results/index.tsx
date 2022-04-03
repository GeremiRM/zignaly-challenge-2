import "./styles.scss";

import { ILocations, Coordinates } from "../../types/Location";

interface ResultsProps {
  locations: ILocations;
}

export const Results: React.FC<ResultsProps> = ({ locations }) => {
  const renderCoords = (coords: Coordinates) => {
    return `Lat: ${coords[0].toFixed(3)}, Log: ${coords[1].toFixed(3)}`;
  };

  const renderLocations = () => {
    return locations?.map((location) => (
      <tr className="row" key={location.id}>
        <td className="data">{location.text}</td>
        <td className="data">{location.place_name}</td>
        <td className="data">{renderCoords(location.geometry.coordinates)}</td>
      </tr>
    ));
  };

  return (
    <section className="results">
      {/* Table */}

      <h2 className="results__title">Results</h2>
      <div className="table-container">
        <table className="table">
          {/* Table - Head */}
          <thead className="head">
            <tr className="row">
              <th className="headers">Name</th>
              <th className="headers">Description</th>
              <th className="headers">Coordinates</th>
            </tr>
          </thead>

          {/* Table - Body */}
          <tbody className="body">{renderLocations()}</tbody>
        </table>
      </div>
    </section>
  );
};
