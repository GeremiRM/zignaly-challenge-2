import { useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";

// Components
import { Suggestions } from "./Suggestions";
import { Map } from "./Map";
import { Filters } from "./Filters";

import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import "./styles.scss";

import { ILocations, Coordinates } from "../../types/Location";

type submitEvt = React.FormEvent<HTMLFormElement>;

interface MapProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  locations: ILocations;
  isLoading: boolean;
}

// Default values

// Madrid
const DF_COORDS: Coordinates = [-3.703339, 40.416729];

export const Search: React.FC<MapProps> = ({
  value,
  onChange,
  locations,
  isLoading,
}) => {
  const [coords, setCoords] = useState<Coordinates>(DF_COORDS);
  const [displaySuggs, setDisplaySuggs] = useState(false);

  const ref = useDetectClickOutside({
    onTriggered: () => setDisplaySuggs(false),
  });

  // Select suggestion
  const selectSugg = (coordinates: Coordinates) => {
    setCoords(coordinates);
    setDisplaySuggs(false);
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
      <Filters />

      {/* Form */}
      <form className="form" autoComplete="off" onSubmit={onSubmit} ref={ref}>
        {/* Input */}
        <div className="input">
          <BiSearchAlt2 className="input__icon input__icon--search" />
          <input
            className="input__bar"
            value={value}
            id="searchInput"
            onChange={onChange}
            onFocus={(e) => setDisplaySuggs(true)}
          />
          {isLoading && (
            <AiOutlineLoading3Quarters className="input__icon input__icon--loading" />
          )}
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
