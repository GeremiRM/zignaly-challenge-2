import mapboxgl from "mapbox-gl";
import { useEffect, useRef } from "react";

import "./styles.scss";

interface MapProps {
  coordinates: [number, number];
}

// Default values
const DF_ZOOM = 9;

export const Map: React.FC<MapProps> = ({ coordinates }) => {
  const mapContainer = useRef(null);
  const map = useRef<mapboxgl.Map | null>(null);

  mapboxgl.accessToken = process.env.REACT_APP_API_KEY!;

  useEffect(() => {
    if (map.current) return; //
    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: "mapbox://styles/mapbox/streets-v11",
      center: coordinates!,
      zoom: DF_ZOOM,
    });
  });

  return (
    <div>
      <div ref={mapContainer} className="map-container"></div>
    </div>
  );
};
