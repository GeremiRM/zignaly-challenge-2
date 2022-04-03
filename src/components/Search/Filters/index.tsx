import { useContext } from "react";
import { Context } from "../../../state/Context";

import { DF_FILTERS } from "../../../constants";

import "./styles.scss";

export const ListFilters: React.FC = () => {
  const filters = DF_FILTERS;

  const { activeFilters, selectFilter } = useContext(Context);

  const renderFilters = () => {
    return filters.map((filter) => (
      <p
        className={
          "list-filters__filter" +
          ` ${activeFilters.includes(filter) && "list-filters__filter--active"}`
        }
        key={filter}
        onClick={() => {
          selectFilter(filter);
        }}
      >
        {filter}
      </p>
    ));
  };

  return <div className="list-filters">{renderFilters()}</div>;
};
