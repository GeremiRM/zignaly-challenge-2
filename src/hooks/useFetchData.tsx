import axios from "axios";
import { useQuery } from "react-query";
import { ILocation } from "../types/Location";

const API_URL = "https://api.mapbox.com/geocoding/v5/mapbox.places/";

const API_KEY = process.env.REACT_APP_API_KEY;

export const useFetchData = (input: string) => {
  const fetchData = async () => {
    const { data } = await axios.get(
      API_URL + encodeURIComponent(input) + ".json?access_token=" + API_KEY
    );

    return data.features;
  };

  const { data, isLoading } = useQuery<ILocation[]>(
    ["locations", input],
    fetchData,
    { refetchOnWindowFocus: false }
  );

  return { data, isLoading };
};
