import "./styles.scss";

import { ILocations, Coordinates } from "../../types/Location";

interface ListProps {
  locations: ILocations;
}

export const List: React.FC<ListProps> = ({ locations }) => {
  const renderCoords = (coords: Coordinates) => {
    return `Lat: ${coords[0].toFixed(3)}, Log: ${coords[1].toFixed(3)}`;
  };

  const renderLocations = () => {
    console.log(locations);
    return locations?.map((location) => (
      <tr className="row" key={location.id}>
        <td className="data">{location.text}</td>
        <td className="data">{location.place_name}</td>
        <td className="data">{renderCoords(location.geometry.coordinates)}</td>
      </tr>
    ));
  };

  return (
    <section className="list">
      {/* Table */}

      <h2 className="list__title">Results</h2>
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
