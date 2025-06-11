import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import "./styles/index.css";

// eslint-disable-next-line react-refresh/only-export-components
function Root() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  );
}

// Render aplikasi
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
