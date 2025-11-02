import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PrototypePage from "./pages/PrototypePage";
import PartnershipPage from "./pages/PartnershipPage";
import ExperimentPage from "./pages/ExperimentPage";
import TokenPage from "./pages/TokenPage";
import DashboardPage from "./pages/DashboardPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/prototype" element={<PrototypePage />} />
        <Route path="/partnership" element={<PartnershipPage />} />
        <Route path="/experiment" element={<ExperimentPage />} />
        <Route path="/token" element={<TokenPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}
