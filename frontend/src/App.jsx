import React, { Suspense } from "react";
// import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
const HomePage = React.lazy(() => import("./pages/HomePage"));
const OurProjectsPage = React.lazy(() => import("./pages/OurProjectsPage"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));
const ServicesPage = React.lazy(() => import("./pages/ServicesPage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));

const App = () => {
  return (
    <Suspense
      fallback={
        <span className="loading loading-spinner text-primary m-auto "></span>
      }
    >
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<OurProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Router>
    </Suspense>
  );
};

export default App;
