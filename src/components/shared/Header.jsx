import './styles/Header.css'
import { AiOutlineHome } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { PiToolboxBold } from "react-icons/pi";
import { BsPersonGear } from "react-icons/bs";
import { MdOutlinePhonelink } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { MdOutlineWbSunny } from "react-icons/md";
import { FiMoon } from "react-icons/fi";

const Header = ({ t, changeLanguage, modoDyL, setModoDyL }) => {

  const [lang, setLang] = useState(false)

  const changeCircleEs = () => {
    setLang(false)
  }
  const changeCircleEn = () => {
    setLang(true)
  }
  const toggleLight = () => {
    setModoDyL(true)
  }
  const toggleDark = () => {
    setModoDyL(false)
  }

  return (
    <header className='header__container'>
      <Link className='header__li'  to='/'>
        <img className='header__logo' src="../logo.svg" alt="" />
      </Link>
      <ul className='header__list'>
        <li>
          <Link className='header__li'  to='/'><AiOutlineHome className='header__icon' /> <h3 className='header__link'>{t("BTN1")}</h3></Link>
        </li>
        <li>
          <Link className='header__li' to='/about'><FaRegUser className='header__icon' /> <h3 className='header__link'>{t("BTN2")}</h3></Link>
        </li>
        <li>
          <Link className='header__li' to='/skills'><BsPersonGear className='header__icon' /> <h3 className='header__link'>{t("BTN3")}</h3></Link>
        </li>
        <li>
          <Link className='header__li' to='/projects'><PiToolboxBold className='header__icon' /> <h3 className='header__link'>{t("BTN4")}</h3></Link>
        </li>
        <li>
          <Link className='header__li' to='/contact'><MdOutlinePhonelink className='header__icon' /> <h3 className='header__link'>{t("BTN5")}</h3></Link>
        </li>
      </ul>
      <div className='container__btns'>
        <div className='header__language'>
          <div className='iconsDL' onClick={() => changeLanguage("en") & changeCircleEn(true) }><img className={`header__img ${lang ?'img__none' : ''}`} src='../english.png'></img></div>
          <div className='iconsDL' onClick={() => changeLanguage("es") & changeCircleEs(false) }><img className={`header__img ${lang ?'' : 'img__none'}`} src='../spanish.png'></img></div>
        </div>
        <div className='header__toggle'>
          <div className='iconsDL' onClick={toggleLight}><MdOutlineWbSunny className={`iconLight iconTo ${modoDyL ?'img__none' : ''}`} /></div>
          <div className='iconsDL' onClick={toggleDark}><FiMoon className={`iconDark iconTo ${modoDyL ?'' : 'img__none'}`} /></div>
        </div>
      </div>
    </header>
  )
}

export default Header
