// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

// IMPORTING ROUTES
// import SiteRoutes from './routes.js'
import DashBoard from "./components/pages/dashboard";
import ContactForm from "./components/pages/contactus";
import LandingPage from "./components/pages/LandingPage/Landingpage";
import RegistrationForm from "./components/pages/RegistrationForm";
import OurEvents from "./components/pages/Ourevent";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
function App() {
  return (
    <>
      <div className="bg-gray-100 border-2 border-white">
        <Navbar />
        <LandingPage />
        <DashBoard />
        <RegistrationForm />
        <ContactForm />
        <OurEvents />
        <Footer />
      </div>
    </>
  );
}

export default App;
