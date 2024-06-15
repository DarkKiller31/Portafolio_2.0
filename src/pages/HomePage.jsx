import {
  FaLinkedin,
  FaWhatsapp,
  FaGithub,
  FaCloudDownloadAlt,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import './styles/HomePage.css'
import 'animate.css'

const HomePage = ({ t, changeLanguage }) => {
  return (
    <main id="home" className="home__container">
      <section className="home__section animate__animated animate__backInDown">
        <h1 className="home__title">{t("Titu_Presen")}</h1>
        <p className="home__text">{t("Presentacion")}</p>
        <div className="home__contentBTN">
          <a className="home__buttons" href="https://www.linkedin.com/in/juan-camilo-trujillo-guzman-2578a2225" target="_blank">
            <FaLinkedin />
            <h3>Linkedin</h3>
          </a>
          <a className="home__buttons animate__wobble" href="https://wa.me/+573195977937?text=Hola%20estoy%20interesado%20en%20tus%20servicios%20de%20desarrollo%20web" target="_blank">
            <FaWhatsapp />
            <h3>WhatsApp</h3>
          </a>
          <a className="home__buttons" href="https://github.com/DarkKiller31" target="_blank">
            <FaGithub />
            <h3>GitHub</h3>
          </a>
          <a className="home__buttons" href="mailto:jcamilot31@gmail.com" target="_blank">
            <SiGmail />
            <h3>Email</h3>
          </a>
          <a className="home__buttons" href="../CV_JuanCamiloTrujillo.pdf" target="_blank">
            <FaCloudDownloadAlt />
            <h3>{t("BotonCV")}</h3>
          </a>
        </div>
      </section>
      <div className="home__contImg  animate__animated animate__backInDown">
        <img className="home__logo" src="../logo.svg" alt="" />
      </div>
    </main>
  );
};

export default HomePage;
