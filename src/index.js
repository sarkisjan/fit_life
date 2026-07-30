import React from "react";
// import ReactDOM from 'react-dom';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.js";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  /* КЛУЧНАТА ПОПРАВКА: Му кажуваме на рутерот дека почетната точка на GitHub Pages е /fit_life */
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>,
);
