import { Signin } from "./components/auth/Signin";
import { Signup } from "./components/auth/Signup";
import { MovingBeam } from "./components/Moving-beam";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "./components/app-loyout";
import { ThemeProvider } from "./shadcn-components/ui/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="container">
        <BrowserRouter>
          <AppLayout />
          <Routes>
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/sign-in" element={<Signin />} />
            <Route path="/moving-beam" element={<MovingBeam />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
