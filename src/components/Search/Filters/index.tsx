import { PlaceType } from "../../../types/Location";
import { DF_FILTERS } from "../../../constants";

import "./styles.scss";

interface ListFiltersProps {
  activeFilters: PlaceType[];
  onSelect: (e: PlaceType) => void;
}

export const ListFilters: React.FC<ListFiltersProps> = ({
  onSelect,
  activeFilters,
}) => {
  const filters = DF_FILTERS;

  const renderFilters = () => {
    return filters.map((filter) => (
      <p
        className={
          "list-filters__filter" +
          ` ${activeFilters.includes(filter) && "list-filters__filter--active"}`
        }
        key={filter}
        onClick={() => {
          onSelect(filter);
        }}
      >
        {filter}
      </p>
    ));
  };

  return <div className="list-filters">{renderFilters()}</div>;
};
