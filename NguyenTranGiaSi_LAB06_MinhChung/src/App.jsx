import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./components/MainLayout";
import "./App.css";

function App() {
  return (
    <Router>
      <Dashboard />
    </Router>
  );
}

export default App;