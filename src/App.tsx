import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";
import Loader from "./components/Loader";
import Team from "./components/Team";

// Lazy-loaded components
const NotFound = lazy(() => import("./components/NotFound"));
const MealKits = lazy(() => import("./components/MealKits"));
const CrowdfundingHome = lazy(() => import("./components/CrowdfundingHome"));
const Services = lazy(() => import("./components/Services"));
const Footer = lazy(() => import("./components/Footer"));
const Subscribe = lazy(() => import("./components/Subscribe"));
const ComingSoon = lazy(() => import("./components/ComingSoon"));
const Landing = lazy(() => import("./components/Landing"));
const About = lazy(() => import("./components/About"));
const Faqs = lazy(() => import("./components/Faqs"));
const Crowdfunding = lazy(() => import("./components/Crowdfunding"));
const Navbar = lazy(() => import("./components/Navbar"));

function App() {
  return (
    <Router>
      {/* Single Suspense boundary handles all lazy components */}
      <Suspense fallback={<Loader />}>
        <div className="App">
          {/* Navbar */}
          <Navbar />

          {/* Main content / routes */}
          <Routes>
            {/* Single-Page Sections (all on "/") */}
            <Route
              path="/"
              element={
                <>
                  <Landing />
                  <About />
                  <MealKits />
                  <CrowdfundingHome />
                  <Services />
                  <Team />
                  <ComingSoon />
                  <Subscribe />
                </>
              }
            />
            {/* Separate Pages */}
            <Route path="/faq" element={<Faqs />} />
            <Route path="/crowdfunding" element={<Crowdfunding />} />

            {/* 404 Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>

          {/* Footer */}
          <Footer />
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
