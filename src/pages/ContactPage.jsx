import { MdOutlineEmail } from "react-icons/md";
import "./styles/ContactPage.css";
import {
  FaLinkedin,
  FaWhatsapp,
  FaGithub,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ContactPage = ({ t }) => {
  return (
    <section id="contact" className="contact__section">
      <h2 className="section__title">{t("Contacto")}</h2>

      <div className="contact__container">
        <div className="contact__info">
          <h3 className="contact__info-title">{t("InfoContacto")}</h3>
          <p className="contact__info-description">{t("TxtInfonCont")}</p>
          <address className="contatc__info-data">
            <div className="contact__info-item">
              <FaWhatsapp />
              <span className="contact__info-number">
                <a
                  href="https://wa.me/+573195977937?text=Hola%20estoy%20interesado%20en%20tus%20servicios%20de%20desarrollo%20web"
                  target="_blank"
                >
                  {t("WhatsApp")}
                </a>
              </span>
            </div>

            <div className="contact__info-item">
              <FaPhone />

              <span className="contact__info-number">
                <a href="tel:1-234-567-8910"> +57 319 597 7937 </a>
              </span>
            </div>

            <div className="contact__info-item">
              <MdOutlineEmail />

              <span className="contact__info-mail">
                <a id="mail" href="mailto:jcamilot31@gmail.com">
                  {" "}
                  jcamilot31@gmail.com{" "}
                </a>
              </span>
            </div>

            <div className="contact__info-item">
              <FaMapMarkerAlt />

              <span className="contact__info-map"> Ibagué, Colombia. </span>
            </div>
          </address>
        </div>

        <div className="contact__form">
          <h3 className="contact__form-title">{t("TituloForm")}</h3>

          <form id="form" className="contact__form-container">
            <div className="contact__form-group">
              <label for="name" className="contact__form-label">
                {t("Name")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="contact__form-input"
                placeholder={t("PlName")}
              />
            </div>

            <div className="contact__form-group">
              <label for="email" className="contact__form-label">
                {t("Email")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="contact__form-input"
                placeholder={t("PlEmail")}
              />
            </div>

            <div className="contact__form-group">
              <label for="subject" className="contact__form-label">
                {t("Subject")}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="contact__form-input"
              />
            </div>

            <div className="contact__form-group">
              <label for="message" className="contact__form-label">
                {t("Message")}
              </label>
              <textarea
                id="message"
                name="message"
                cols="30"
                rows="10"
                className="contact__form-input"
              ></textarea>
            </div>

            <button
              type="submit"
              id="button"
              value=""
              className="btn contact__form-button"
            >
              {t("BotonForm")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;