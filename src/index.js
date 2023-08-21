import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";

import "./fonts/ParryHotter.ttf";

function Router() {
  return (
    <BrowserRouter basename="/potter-movie-forum">
      <App />
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Router />);
