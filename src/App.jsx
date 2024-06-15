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
import ButtonsSpam from "./components/shared/ButtonsSpam";

function App() {
  const { t, i18n } = useTranslation();

  const [modoDyL, setModoDyL] = useState(false)

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }


  return (
    <div className={`app ${modoDyL ?'light' : ''}`}>
      <Header className='appHeader' t={t} changeLanguage={changeLanguage} modoDyL={modoDyL} setModoDyL={setModoDyL} />
      <div className="container_components">
        <HomePage t={t} />
        <AboutPage t={t} />
        <SkillsPage t={t} />
        <ProjectsPage t={t} />
        <ContactPage t={t} />
      </div>
        <ButtonsSpam />
    </div>
  );
}

export default App;