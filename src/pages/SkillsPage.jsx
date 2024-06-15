import './styles/SkillsPage.css'

const SkillsPage = ({ t }) => {
  return (
    <main id='skills' className='skill__content'>
      <div className='skill__info animate__animated animate__backInUp'>
          <h2 className='skill__title'>{t("Title_Habil")}</h2>
          <p className='skill__text'>{t("TxtHabil")}</p>
      </div>
      <div className='skill__containerImg'>
        <img className="skills__img animate__animated animate__backInUp" src="../html.svg" alt="" />
        <img className="skills__img animate__animated animate__backInUp" src="../css.svg" alt="" />
        <img className="skills__img animate__animated animate__backInUp" src="../javascript.svg" alt="" />
        <img className="skills__img animate__animated animate__backInUp" src="../react.svg" alt="" />
        <img className="skills__img animate__animated animate__backInUp" src="../git.svg" alt="" />
        <img className="skills__img animate__animated animate__backInUp" src="../node-js.svg" alt="" />
        <img className="skills__img animate__animated animate__backInUp" src="../photoshop.svg" alt="" />
        <img className="skills__img animate__animated animate__backInUp" src="../illustrator.svg" alt="" />
        <img className="skills__img animate__animated animate__backInUp" src="../autocad.png" alt="" />
        <img className="skills__img animate__animated animate__backInUp" src="../revit.webp" alt="" />
        <img className="skills__img animate__animated animate__backInUp" src="../sketchup.png" alt="" />
        <img className="skills__img animate__animated animate__backInUp" src="../lumion.png" alt="" />
        <img className="skills__img animate__animated animate__backInUp" src="../vray.png" alt="" />
      </div>        
    </main>
  )
}

export default SkillsPage
