import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import NotFound from "./NotFound";
import Navbar from "./components/Navbar";
import Team from "./components/Team";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <Router>
    <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<NotFound />} />
          {/* Dynamic route for blog posts */}
        </Routes>
        <About/>
      <Team/>
      <Footer/>
    </Router>
    
  );
}

export default App;
