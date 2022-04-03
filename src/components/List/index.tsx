import "./styles.scss";

import { ILocations, Coordinates, PlaceType } from "../../types/Location";
import { useState } from "react";
// import { ListFilters } from "./Filters";

interface ListProps {
  locations: ILocations;
}

export const List: React.FC<ListProps> = ({ locations }) => {
  const [filters, setFilters] = useState<PlaceType[]>([]);

  const renderCoords = (coords: Coordinates) => {
    return `Lat: ${coords[0].toFixed(3)}, Log: ${coords[1].toFixed(3)}`;
  };

  const renderLocations = () => {
    const filteredLocations =
      filters.length > 0
        ? locations?.filter(({ place_type }) => filters.includes(...place_type))
        : locations;

    return filteredLocations?.map((location) => (
      <tr className="row" key={location.id}>
        <td className="data">{location.text}</td>
        <td className="data">{renderCoords(location.geometry.coordinates)}</td>
      </tr>
    ));
  };

  return (
    <section className="list">
      {/* List Filters */}
      {/* <ListFilters
        filters={DF_FILTERS}
        onSelect={selectFilter}
        activeFilters={filters}
      /> */}

      {/* Table */}
      <div className="table-container">
        <table className="table">
          {/* Table - Head */}
          <thead className="head">
            <tr className="row">
              <th className="headers">Name</th>
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
