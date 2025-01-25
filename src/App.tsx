import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import "./App.css";
import MealKits from "./components/MealKits";
import CrowdfundingHome from "./components/CrowdfundingHome";

const Landing = lazy(() => import("./components/Landing"));
const About = lazy(() => import("./components/About"));
const Faqs = lazy(() => import("./components/Faqs"));
const Crowdfunding = lazy(() => import("./components/Crowdfunding"));

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Single-Page Sections */}
            <Route
              path="/"
              element={
                <>
                  <Landing />
                  <About />
                  <MealKits />
                  <CrowdfundingHome />
                  {/* Add more single-page sections here */}
                </>
              }
            />
            {/* Separate Pages */}
            <Route path="/faq" element={<Faqs />} />
            <Route path="/crowdfunding" element={<Crowdfunding />} />
            {/* 404 Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;