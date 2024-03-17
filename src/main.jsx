import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import ThemeProvider from "./Contexts/themes/ThemeProvider";
import ErrorProvider from "./Contexts/errors/ErrorProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ErrorProvider>
    <ThemeProvider>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </ErrorProvider>
);
