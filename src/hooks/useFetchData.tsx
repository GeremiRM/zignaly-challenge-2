import axios from "axios";
import { useQuery } from "react-query";
import { ILocations, PlaceType } from "../types/Location";
import { API_KEY, API_URL } from "../constants";

export const useFetchData = (input: string, filters?: PlaceType[]) => {
  const fetchData = async () => {
    const { data } = await axios.get(
      `${API_URL} ${encodeURIComponent(
        input
      )}.json?limit=10&types=${filters?.join(",")}&access_token=${API_KEY}`
    );

    return data.features;
  };

  const { data, isLoading } = useQuery<ILocations>(
    ["locations", input],
    fetchData,
    { refetchOnWindowFocus: false }
  );

  return { data, isLoading };
};
