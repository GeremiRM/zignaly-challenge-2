export type ILocations = ILocation[] | undefined;

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
  geometry: Geometry;
  context: Context[];
}

export interface Geometry {
  type: string;
  coordinates: Coordinates;
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

export type Coordinates = [number, number];
