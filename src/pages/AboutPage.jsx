import './styles/AboutPage.css'

const AboutPage = ({ t }) => {
  return (
    <main className="about__container">
      <div className="about__collage animate__animated animate__backInUp">
        <img className="img__collage img1" src="../2.jpg" alt="" />
        <img className="img__collage img2" src="../3.jpg" alt="" />
        <img className="img__collage img3" src="../4.jpg" alt="" />
        <img className="img__collage img4" src="../5.jpg" alt="" />
        <img className="img__collage img5" src="../6.jpg" alt="" />
        <img className="img__collage img6" src="../7.jpg" alt="" />
        <img className="img__collage img7" src="../1.jpg" alt="" />
      </div>
      <div className='about__info animate__animated animate__backInUp'>
        <h2 className='about__title'>{t("Titu_Acerca")}</h2>
        <p className='about__text'>
          {t("TxtAcerca1")}
        </p>
      </div>
    </main>
  );
};

export default AboutPage;
