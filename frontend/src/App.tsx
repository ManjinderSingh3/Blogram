import { Signin } from "./components/auth/Signin";
import { Signup } from "./components/auth/Signup";
import { MovingBeam } from "./components/moving-beam";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./components/landing-page";
import { ThemeProvider } from "./shadcn-components/ui/theme-provider";
import { NavbarMobile } from "./components/navbar-mobile";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="px-8 w-full lg:container">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:35px_35px]"></div>

        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[510px] w-[410px] rounded-2xl bg-fuchsia-500 dark:bg-fuchsia-200 opacity-20 blur-[100px]"></div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/sign-in" element={<Signin />} />
            <Route path="/moving-beam" element={<MovingBeam />} />
            <Route path="/mobile-navbar" element={<NavbarMobile />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
