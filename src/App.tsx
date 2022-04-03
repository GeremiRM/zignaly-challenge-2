import { useContext, useState } from "react";

// components
import { Search } from "./components/Search";
import { Container } from "./components/shared/Container";
import { Header } from "./components/Header";
import { Results } from "./components/Results";

import "./App.scss";

import { useFetchData } from "./hooks/useFetchData";
import { Context } from "./state/Context";

type changeEvt = React.ChangeEvent<HTMLInputElement>;

function App() {
  const [input, setInput] = useState("");
  const { activeFilters } = useContext(Context);

  const { data, isLoading } = useFetchData(input, activeFilters);

  const onChange = (e: changeEvt) => {
    setInput(e.target.value);
  };

  return (
    <div className="app">
      <Container>
        {/* Header */}
        <Header />

        <section className="title">
          <h1 className="title__line">
            Our API allows you to search for addresses and places by name!
          </h1>
          <h1 className="title__line">Give it a shot!</h1>
        </section>

        {/* Body */}
        <main className="main">
          {/* Title */}

          {/* Map */}
          <Search
            value={input}
            onChange={onChange}
            locations={data}
            isLoading={isLoading}
          />

          {/* List */}
          <Results locations={data} />
        </main>
      </Container>
    </div>
  );
}

export default App;
