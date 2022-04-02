import { useEffect, useState } from "react";
import { ILocations, Coordinates } from "../../../types/Location";

import "./styles.scss";

interface SuggestionsProps {
  suggestions: ILocations;
  onSelect: (coords: Coordinates) => void;
}

export const Suggestions: React.FC<SuggestionsProps> = ({
  suggestions,
  onSelect,
}) => {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setDisplay(!!suggestions);
  }, [suggestions]);

  const renderSuggestions = () => {
    return suggestions?.map((suggestion) => (
      <p
        key={suggestion?.id}
        className="suggestion"
        onClick={() => {
          setDisplay(false);
          onSelect(suggestion.geometry.coordinates);
        }}
      >
        {suggestion?.place_name}
      </p>
    ));
  };

  if (!display) return null;

  return <div className="suggestions">{renderSuggestions()}</div>;
};
