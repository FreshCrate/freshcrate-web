import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import NotFound from "./NotFound";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<NotFound />} />
        {/* Dynamic route for blog posts */}
      </Routes>
    </Router>
  );
}

export default App;
