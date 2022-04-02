import { useState } from "react";
import { useFetchData } from "./hooks/useFetchData";

// components
import { Map } from "./components/Map";
import { Container } from "./components/shared/Container";
import { Header } from "./components/Header";

import "./App.scss";

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

        {/* Body */}
        <main className="body">
          {/* Title */}
          <div className="title">
            <h1 className="title__line">
              Our API allows you to search for addresses and places by name
            </h1>
            <h1 className="title__line">Give it a shot!</h1>
          </div>

          {/* Map */}
          <Map value={input} onChange={onChange} locations={data} />
        </main>
      </Container>
    </div>
  );
}

export default App;
