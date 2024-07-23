import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import styled from "styled-components";

// this are global styles for

const GlobalStyles = styled.section({
  fontFamily: "roboto",
  backgroundColor: "#ececec;",
  letterSpacing: ".5px",
  lineHeight: "20px",
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles>
      <App />
    </GlobalStyles>
  </React.StrictMode>
);
