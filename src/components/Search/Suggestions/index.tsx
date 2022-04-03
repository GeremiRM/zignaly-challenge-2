import { ILocations, Coordinates } from "../../../types/Location";

import "./styles.scss";

interface SuggestionsProps {
  suggestions: ILocations;
  onSelect: (coords: Coordinates) => void;
  display: boolean;
}

export const Suggestions: React.FC<SuggestionsProps> = ({
  suggestions,
  onSelect,
  display,
}) => {
  const renderSuggestions = () => {
    return suggestions?.map((suggestion) => (
      <li
        className="suggestion"
        key={suggestion?.id}
        onClick={() => {
          onSelect(suggestion.geometry.coordinates);
        }}
      >
        <p className="suggestion__title">{suggestion.text}</p>
        <p className="suggestion__desc">{suggestion?.place_name}</p>
      </li>
    ));
  };

  if (!display) return null;

  return <ul className="suggestions">{renderSuggestions()}</ul>;
};
