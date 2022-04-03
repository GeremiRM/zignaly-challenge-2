import { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { Suggestions } from "./Suggestions";
import { useDetectClickOutside } from "react-detect-click-outside";
import "./styles.scss";

import { ILocations, Coordinates, PlaceType } from "../../types/Location";
import { Map } from "./Map";
import { ListFilters } from "./Filters";

type submitEvt = React.FormEvent<HTMLFormElement>;

interface MapProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  locations: ILocations;
}

// Default values

// Madrid
const DF_COORDS: Coordinates = [-3.703339, 40.416729];

export const Search: React.FC<MapProps> = ({ value, onChange, locations }) => {
  const [coords, setCoords] = useState<Coordinates>(DF_COORDS);
  const [activeFilters, setActiveFilters] = useState<PlaceType[]>([]);
  const [displaySuggs, setDisplaySuggs] = useState(false);

  const ref = useDetectClickOutside({
    onTriggered: () => setDisplaySuggs(false),
  });

  // Select suggestion
  const selectSugg = (coordinates: Coordinates) => {
    setCoords(coordinates);
    setDisplaySuggs(false);
  };

  const selectFilter = (selected: PlaceType) => {
    setActiveFilters(
      activeFilters.includes(selected)
        ? activeFilters.filter((filter) => selected !== filter)
        : activeFilters.concat(selected)
    );
  };

  const onSubmit = (e: submitEvt) => {
    e.preventDefault();

    if (!locations) return;

    const { coordinates } = locations[0]!.geometry;
    setCoords(coordinates);
  };

  return (
    <section className="map">
      {/* Filters */}

      <ListFilters onSelect={selectFilter} activeFilters={activeFilters} />

      {/* Form */}
      <form className="form" autoComplete="off" onSubmit={onSubmit} ref={ref}>
        {/* Input */}
        <div className="input">
          <BiSearchAlt2 className="input__icon" />
          <input
            className="input__bar"
            value={value}
            id="searchInput"
            onChange={onChange}
            onFocus={(e) => setDisplaySuggs(true)}
          />
        </div>

        {/* Suggestions */}
        <Suggestions
          suggestions={locations}
          onSelect={selectSugg}
          display={displaySuggs}
        />
      </form>

      {/* Map */}
      <Map coords={coords} />
    </section>
  );
};
