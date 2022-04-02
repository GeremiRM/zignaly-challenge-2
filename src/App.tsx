import { useState } from "react";
import { useFetchData } from "./hooks/useFetchData";

// components
import { Form } from "./components/Form";
import { Container } from "./components/shared/Container";
import { Header } from "./components/Header";
import { Map } from "./components/Map";

import "./App.scss";

type changeEvt = React.ChangeEvent<HTMLInputElement>;

type Coords = [number, number];

// Madrid - Spain
const DF_COORDS: Coords = [-3.703339, 40.416729];

function App() {
  const [input, setInput] = useState("");
  const [coords, setCoords] = useState<Coords>(DF_COORDS);

  const { data } = useFetchData(input);

  const onChange = (e: changeEvt) => {
    setInput(e.target.value);
  };

  return (
    <div className="app">
      <Container>
        <Header />
        <main className="body">
          <div className="title">
            <h1 className="title__line">
              Our API allows you to search for addresses and places by name
            </h1>
            <h1 className="title__line">Give it a shot!</h1>
          </div>
          <Form value={input} onChange={onChange} />
          <Map coordinates={coords} />
        </main>
      </Container>
    </div>
  );
}

export default App;
