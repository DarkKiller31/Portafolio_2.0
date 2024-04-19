import "./App.css";
import { useTranslation } from "react-i18next";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import { Routes, Route } from "react-router-dom";
import Header from "./components/shared/Header";
import { useState } from "react";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  const { t, i18n } = useTranslation();

  const [modoDyL, setModoDyL] = useState(false)

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }


  return (
    <div className={`app ${modoDyL ?'light' : ''}`}>
      <Header className='appHeader' t={t} changeLanguage={changeLanguage} modoDyL={modoDyL} setModoDyL={setModoDyL} />
      <Routes>
        <Route path="/" element={<HomePage t={t} />} />
        <Route path="/about" element={<AboutPage t={t} />} />
        <Route path="/skills" element={<SkillsPage t={t} />} />
        <Route path="/projects" element={<ProjectsPage t={t} />} />
        <Route path="/contact" element={<ContactPage t={t} />} />
      </Routes>
    </div>
  );
}

export default App;