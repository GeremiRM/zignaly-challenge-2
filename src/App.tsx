import { useState } from "react";
import { useFetchData } from "./hooks/useFetchData";

// components
import { Form } from "./components/form";

import "./App.scss";
import { Container } from "./components/form/shared/Container";

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
        <Form value={input} onChange={onChange} />
      </Container>
    </div>
  );
}

export default App;
