import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { WebHome } from "./pages/WebHome";

import "./App.css";
import React from "react";
import { useScreenSize } from "./hooks/useScreenSize";
import { MobileHome } from "./pages/MobileHome";

function App() {
  const { width } = useScreenSize();

  return (
    <Router>
      <Routes>
        <Route path="/" element={width > 800 ? <WebHome /> : <MobileHome />} />
      </Routes>
    </Router>
  );
}

export default App;
