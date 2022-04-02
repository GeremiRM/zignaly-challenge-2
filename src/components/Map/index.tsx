import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { BiSearchAlt2 } from "react-icons/bi";
import { Suggestions } from "./Suggestions";
import { useDetectClickOutside } from "react-detect-click-outside";
import "./styles.scss";

import { ILocations } from "../../types/Location";

type submitEvt = React.FormEvent<HTMLFormElement>;

type Coords = [number, number];

interface MapProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  locations: ILocations;
}

// Default values
const DF_ZOOM = 9;

// Madrid
const DF_COORDS: Coords = [-3.703339, 40.416729];

export const Map: React.FC<MapProps> = ({ value, onChange, locations }) => {
  const [coords, setCoords] = useState<Coords>(DF_COORDS);
  const [displaySuggs, setDisplaySuggs] = useState(false);
  const ref = useDetectClickOutside({
    onTriggered: () => setDisplaySuggs(false),
  });

  const mapContainer = useRef(null);
  const map = useRef<mapboxgl.Map | null>(null);

  mapboxgl.accessToken = process.env.REACT_APP_API_KEY!;

  const selectCoord = (coordinates: Coords) => {
    setCoords(coordinates);
    setDisplaySuggs(false);
    map.current?.easeTo({ center: coordinates, zoom: 7 });
  };

  const onSubmit = (e: submitEvt) => {
    e.preventDefault();
    if (locations) {
      const { coordinates } = locations[0]!.geometry;
      setCoords(coordinates);
      map.current?.easeTo({ center: coordinates, zoom: 7 });
    }
  };

  useEffect(() => {
    if (map.current) return; //
    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: "mapbox://styles/mapbox/streets-v11",
      center: coords,
      zoom: DF_ZOOM,
    });
  });

  return (
    <div className="map">
      <form className="form" autoComplete="off" onSubmit={onSubmit} ref={ref}>
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
        <Suggestions
          suggestions={locations}
          onSelect={selectCoord}
          display={displaySuggs}
        />
      </form>
      <div ref={mapContainer} className="map-container"></div>
    </div>
  );
};
