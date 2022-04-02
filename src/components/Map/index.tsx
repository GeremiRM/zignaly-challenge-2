import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

import "./styles.scss";
import { ILocations } from "../../types/Location";
import { Suggestions } from "./Suggestions";

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

  const mapContainer = useRef(null);
  const map = useRef<mapboxgl.Map | null>(null);

  mapboxgl.accessToken = process.env.REACT_APP_API_KEY!;

  const onSelect = (coords: Coords) => {
    setCoords(coords);
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

  useEffect(() => {
    map.current?.easeTo({ center: coords });
  }, [coords]);

  return (
    <div className="map">
      <form className="form" autoComplete="off">
        <input
          value={value}
          id="searchInput"
          onChange={onChange}
          className="form__input"
        />
        <Suggestions suggestions={locations} onSelect={onSelect} />
      </form>
      <div ref={mapContainer} className="map-container"></div>
    </div>
  );
};
