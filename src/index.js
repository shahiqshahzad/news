import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
const root = ReactDOM.createRoot(document.getElementById("root"));
axios.defaults.baseURL = process.env.REACT_APP_URL;
axios.defaults.timeout = 5000;
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
reportWebVitals();
