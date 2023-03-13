import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Landing from "../pages/landing/Landing";

const AnimatedRoutes = ({ personalDetails }) => {
  const location = useLocation();
  location.basename = process.env.PUBLIC_URL

  console.log("PUBLIC:URL : ", process.env.PUBLIC_URL)

  return (
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing name={personalDetails.name} tagline={personalDetails.tagline} />} />
        <Route
          path="/about"
          element={
            <About
              name={personalDetails.name}
              location={personalDetails.location}
              email={personalDetails.email}
              availability={personalDetails.availability}
              brand={personalDetails.brand}
            />
          }
        />
        <Route
          path="/contact"
          element={
            <Contact name={personalDetails.name} location={personalDetails.location} email={personalDetails.email} />
          }
        />
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
  );
};

export default AnimatedRoutes;
