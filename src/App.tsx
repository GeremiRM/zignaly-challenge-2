import mapboxgl from "mapbox-gl";
import { useEffect, useRef } from "react";

import "./App.css";

function App() {
  const mapContainer = useRef(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-70.9, 42.35],
      zoom: 9,
    });
  });

  mapboxgl.accessToken = process.env.REACT_APP_API_KEY!;

  return (
    <div className="App">
      <div id="map"></div>
      <div className="map-container" ref={mapContainer}></div>
    </div>
  );
}

export default App;
