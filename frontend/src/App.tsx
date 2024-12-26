import { Signin } from "./components/Signin";
import { Signup } from "./components/Signup";
import { HeroSectionTest } from "./components/HeroSectionTest";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/test" element={<HeroSectionTest />} />
          <Route path="/test1" element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
