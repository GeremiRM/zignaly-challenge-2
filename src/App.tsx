import { useState } from "react";
import { useFetchData } from "./hooks/useFetchData";

// components
import { Search } from "./components/Search";
import { Container } from "./components/shared/Container";
import { Header } from "./components/Header";

import "./App.scss";
import { List } from "./components/List";

type changeEvt = React.ChangeEvent<HTMLInputElement>;

function App() {
  const [input, setInput] = useState("");
  const { data } = useFetchData(input);

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
            Our API allows you to search for addresses and places by name
          </h1>
          <h1 className="title__line">Give it a shot!</h1>
        </section>

        {/* Body */}
        <main className="main">
          {/* Title */}

          {/* Map */}
          <Search value={input} onChange={onChange} locations={data} />

          {/* List */}
          <List locations={data} />
        </main>
      </Container>
    </div>
  );
}

export default App;
