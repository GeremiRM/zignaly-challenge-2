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
