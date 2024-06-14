import { Routes, Route } from "react-router-dom";

import Layout from "./assets/components/Layout";
import Home from "./assets/pages/Home";
import Contact from "./assets/pages/Contact";
import Projects from "./assets/pages/Projects";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Route>
    </Routes>
  );
}

export default App;
