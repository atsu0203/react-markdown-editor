import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { createGlobalStyle } from 'styled-components'
import { Editor } from "./pages/editor";

const GlobalStyle = createGlobalStyle`
body * {
  box-sizing: border-box;
}
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Editor />
    </div>
  );
}

export default App;
