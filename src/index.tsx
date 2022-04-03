import React from "react";
import ReactDOMClient from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "mapbox-gl/dist/mapbox-gl.css";

import { QueryClientProvider, QueryClient } from "react-query";
import { ContextProvider } from "./state/Context";

const queryClient = new QueryClient();

const root = ReactDOMClient.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
