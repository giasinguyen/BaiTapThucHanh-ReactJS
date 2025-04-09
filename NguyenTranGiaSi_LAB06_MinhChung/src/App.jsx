import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import DashboardContent from "./pages/DashboardContent ";
import ProjectsPage from "./pages/ProjectsPage";
import TeamsPage from "./pages/TeamsPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import MessagesPage from "./pages/MessagesPage";
import IntegrationsPage from "./pages/IntegrationsPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<DashboardContent />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="teams" element={<TeamsPage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="messages" element={<MessagesPage />} />
          <Route path="integrations" element={<IntegrationsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;