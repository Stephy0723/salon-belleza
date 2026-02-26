import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../features/home/HomePage";
import { AboutPage } from "../features/about/AboutPage";
import { ServicesPage } from "../features/services/ServicesPage";
import { ContactPage } from "../features/contact/ContactPage";
import { BookingPage } from "../features/contact/BookingPage";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/nosotros" element={<AboutPage />} />
      <Route path="/servicios" element={<ServicesPage />} />
      <Route path="/contacto" element={<ContactPage />} />
      <Route path="/agendar" element={<BookingPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
