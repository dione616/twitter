import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import "./index.css";
import App from "./components/app";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./components/styles/theme";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
