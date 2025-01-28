import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import "./App.css";

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
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Single-Page Sections */}
            <Route
              path="/"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <>
                    <Landing />
                    <About />
                    <MealKits />
                    <CrowdfundingHome />
                    <Services />
                    <ComingSoon />
                    <Subscribe />
                    {/* Add more single-page sections here */}
                  </>
                </Suspense>
              }
            />
            {/* Separate Pages */}
            <Route path="/faq" element={<Faqs />} />
            <Route path="/crowdfunding" element={<Crowdfunding />} />
            {/* 404 Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Footer />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
