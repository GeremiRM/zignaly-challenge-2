import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

import { Coordinates } from "../../../types/Location";

interface MapProps {
  coords: Coordinates;
}

mapboxgl.accessToken = process.env.REACT_APP_API_KEY!;

const DF_ZOOM = 9;

export const Map: React.FC<MapProps> = ({ coords }) => {
  const mapContainer = useRef(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (map.current) return; // only render the map once

    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: "mapbox://styles/mapbox/streets-v11",
      center: coords,
      zoom: DF_ZOOM,
    });
  });

  useEffect(() => {
    map.current?.easeTo({ center: coords, zoom: 7 });
  }, [coords]);

  return <div className="map-container" ref={mapContainer}></div>;
};
