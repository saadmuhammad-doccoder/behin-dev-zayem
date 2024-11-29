import HeroSection from "./components/HeroSection.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import ArticlesPage from "./pages/ArticlesPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import CommunityPage from "./pages/CommunityPage.jsx";
import EventsPage from "./pages/EventsPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="articles" element={<ArticlesPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
