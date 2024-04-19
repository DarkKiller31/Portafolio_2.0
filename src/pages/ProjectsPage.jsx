import './styles/ProjectsPage.css'

const ProjectsPage = ({ t }) => {
  return (
    <section className='project__container'>
      <h2 className='project__title'>{t("Proyectos")}</h2>
      <div className='container__cards'>
      <div className="project__card">
          <img className="project__img" src="../project6.png" alt="" />
        <div className="project__info">
          <h3 className='project_card_title'>{t("ProEnt6Titulo")}</h3>
            <p className='project__text'>{t("ProEnt6Txt")}</p>
            <div className='container__btns'>
              <a className="home__buttons" href="https://hotel-vip-gen35-camilotrujillo.netlify.app/" target="_blank">
                <h3>{t("BotonDemo")}</h3>
              </a>
              <a className="home__buttons" href="https://github.com/DarkKiller31/Entregable_6Gen35" target="_blank">
                <h3>{t("BotonCod")}</h3>
              </a>
            </div>
          </div>
        </div>
        <div className="project__card">
          <img className="project__img" src="../project5.png" alt="" />
        <div className="project__info">
          <h3 className='project_card_title'>{t("ProEnt5Titulo")}</h3>
            <p className='project__text'>{t("ProEnt5Txt")}</p>
            <div className='container__btns'>
              <a className="home__buttons" href="https://pokedex-camilo-t-gen35.netlify.app/" target="_blank">
                <h3>{t("BotonDemo")}</h3>
              </a>
              <a className="home__buttons" href="https://github.com/DarkKiller31/Entregable_5Gen35" target="_blank">
                <h3>{t("BotonCod")}</h3>
              </a>
            </div>
          </div>
        </div>
        <div className="project__card">
          <img className="project__img" src="../project4.png" alt="" />
        <div className="project__info">
          <h3 className='project_card_title'>{t("ProEnt4Titulo")}</h3>
            <p className='project__text'>{t("ProEnt4Txt")}</p>
            <div className='container__btns'>
              <a className="home__buttons" href="https://entregable4-gen35-usercrud.netlify.app/" target="_blank">
                <h3>{t("BotonDemo")}</h3>
              </a>
              <a className="home__buttons" href="https://github.com/DarkKiller31/Entregable_4Gen35" target="_blank">
                <h3>{t("BotonCod")}</h3>
              </a>
            </div>
          </div>
        </div>
      <div className="project__card">
          <img className="project__img" src="../project3.png" alt="" />
        <div className="project__info">
          <h3 className='project_card_title'>{t("ProEnt3Titulo")}</h3>
            <p className='project__text'>{t("ProEnt3Txt")}</p>
            <div className='container__btns'>
              <a className="home__buttons" href="https://entregable3gen35rick-and-morty-app.netlify.app/" target="_blank">
                <h3>{t("BotonDemo")}</h3>
              </a>
              <a className="home__buttons" href="https://github.com/DarkKiller31/Entregable_3Gen35" target="_blank">
                <h3>{t("BotonCod")}</h3>
              </a>
            </div>
          </div>
        </div>
        <div className="project__card">
          <img className="project__img" src="../project2.png" alt="" />
        <div className="project__info">
          <h3 className='project_card_title'>{t("ProEnt2Titulo")}</h3>
            <p className='project__text'>{t("ProEnt2Txt")}</p>
            <div className='container__btns'>
              <a className="home__buttons" href="https://entregable2-gen35camilo-trujillo.netlify.app/" target="_blank">
                <h3>{t("BotonDemo")}</h3>
              </a>
              <a className="home__buttons" href="https://github.com/DarkKiller31/Entregable_2Gen35" target="_blank">
                <h3>{t("BotonCod")}</h3>
              </a>
            </div>
          </div>
        </div>
        <div className="project__card">
          <img className="project__img" src="../project1.png" alt="" />
        <div className="project__info">
          <h3 className='project_card_title'>{t("ProEnt1Titulo")}</h3>
            <p className='project__text'>{t("ProEnt1Txt")}</p>
            <div className='container__btns'>
              <a className="home__buttons" href="https://entregable1-gen35camilo-trujillo.netlify.app/" target="_blank">
                <h3>{t("BotonDemo")}</h3>
              </a>
              <a className="home__buttons" href="https://github.com/DarkKiller31/Entregable_1Gen35" target="_blank">
                <h3>{t("BotonCod")}</h3>
              </a>
            </div>
          </div>
        </div>
        
        
      </div>
    </section>
  )
}

export default ProjectsPage
