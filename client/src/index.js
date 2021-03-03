import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
import Study from "./service/study_service";
import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./store/store";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    language: languageReducer,
  },
});

const httpClient = axios.create({
  baseURL: "http://localhost:3000/api/",
});

const study = new Study(httpClient);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App studyService={study} />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
