import { createContext, useState } from "react";
import { PlaceType } from "../types/Location";

interface IContext {
  activeFilters: PlaceType[];
  selectFilter: (selected: PlaceType) => void;
}

export const Context = createContext<IContext>({} as IContext);

export const ContextProvider = (props: any) => {
  const [activeFilters, setActiveFilters] = useState<PlaceType[]>(["place"]);

  const selectFilter = (selected: PlaceType) => {
    setActiveFilters(
      activeFilters.includes(selected)
        ? activeFilters.filter((filter) => selected !== filter)
        : activeFilters.concat(selected)
    );
  };

  return (
    <Context.Provider value={{ activeFilters, selectFilter }}>
      {props.children}
    </Context.Provider>
  );
};
