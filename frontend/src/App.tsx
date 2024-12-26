import { Signin } from "./components/auth/Signin";
import { Signup } from "./components/auth/Signup";
import { HeroSectionTest } from "./components/HeroSectionTest";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "./components/app-loyout";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <AppLayout />
        <Routes>
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/test" element={<HeroSectionTest />} />
          <Route path="/test1" element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
