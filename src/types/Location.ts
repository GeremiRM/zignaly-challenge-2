import { GeometryObject } from "geojson";

export interface ILocation {
  id: string;
  type: string;
  place_type: string[];
  relevance: number;
  properties: Properties;
  text: string;
  place_name: string;
  bbox: number[];
  center: number[];
  geometry: GeometryObject;
  context: Context[];
}

export interface Context {
  id: string;
  wikidata: string;
  short_code: string;
  text: string;
}

export interface Properties {
  short_code: string;
  wikidata: string;
}
