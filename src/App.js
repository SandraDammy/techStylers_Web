import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Page/Home";
import AboutUs from "./Components/Page/AboutUs";
import Contact from "./Components/Page/Contact";
import Blog from "./Components/Page/Blog";
import Event from "./Components/Page/Event";
import Gallery from "./Components/Page/Gallery";
import Resources from "./Components/Page/Resources";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/event" element={<Event />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
