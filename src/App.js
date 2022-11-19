import Cards from "./components/Cards/Cards";
import Navbar from "./components/Navbar/Navbar.jsx";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
