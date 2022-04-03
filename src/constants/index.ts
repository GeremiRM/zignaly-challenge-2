import { PlaceType } from "../types/Location";

export const API_KEY = process.env.REACT_APP_API_KEY;

export const API_URL = "https://api.mapbox.com/geocoding/v5/mapbox.places/";

export const DF_FILTERS: PlaceType[] = [
  "address",
  "country",
  "region",
  "postcode",
  "district",
  "place",
  "neighborhood",
  "poi",
];

export const MockData = [
  {
    id: "place.10708255346562040",
    type: "Feature",
    place_type: ["place"],
    relevance: 1,
    properties: {
      wikidata: "Q2807",
    },
    text: "Madrid",
    place_name: "Madrid, Madrid, Spain",
    bbox: [-3.888956, 40.312064, -3.518126, 40.643282],
    center: [-3.69194, 40.41889],
    geometry: {
      type: "Point",
      coordinates: [-3.69194, 40.41889],
    },
    context: [
      {
        id: "region.9368530433562040",
        wikidata: "Q2807",
        text: "Madrid",
      },
      {
        id: "country.3373497261570100",
        wikidata: "Q29",
        short_code: "es",
        text: "Spain",
      },
    ],
  },
];
