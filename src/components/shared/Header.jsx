import './styles/Header.css'
import { AiOutlineHome } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { PiToolboxBold } from "react-icons/pi";
import { BsPersonGear } from "react-icons/bs";
import { MdOutlinePhonelink } from "react-icons/md";
import { useState } from 'react';
import { MdOutlineWbSunny } from "react-icons/md";
import { FiMoon } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";


const Header = ({ t, changeLanguage, modoDyL, setModoDyL }) => {

  const [openMenu, setOpenMenu] = useState(false)

  const handleOpen = () => {
    setOpenMenu(true)
    if(openMenu){
      setOpenMenu(false)
    }
  }

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
      <a className='header__li Img'  to='/'>
        <img className='header__logo' src="../logo.svg" alt="" />
      </a>
      <nav className='header__inter'>
      <div className="nav__toggle" onClick={handleOpen}>
          <RxHamburgerMenu />
        </div>
        <div className={`content__list ${openMenu ?'list__open' : ''}`}>
            <ul className='header__list'>
              <li>
                <a className='header__li'  href='#home'><AiOutlineHome className='header__icon' /> <h3 onClick={handleOpen} className='header__link'>{t("BTN1")}</h3></a>
              </li>
              <li>
                <a className='header__li' href='#about'><FaRegUser className='header__icon' /> <h3 onClick={handleOpen} className='header__link'>{t("BTN2")}</h3></a>
              </li>
              <li>
                <a className='header__li' href='#skills'><BsPersonGear className='header__icon' /> <h3 onClick={handleOpen} className='header__link'>{t("BTN3")}</h3></a>
              </li>
              <li>
                <a className='header__li' href='#projects'><PiToolboxBold className='header__icon' /> <h3 onClick={handleOpen} className='header__link'>{t("BTN4")}</h3></a>
              </li>
              <li>
                <a className='header__li' href='#contact'><MdOutlinePhonelink className='header__icon' /> <h3 onClick={handleOpen} className='header__link'>{t("BTN5")}</h3></a>
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
        </div>
      </nav>
    </header>
  )
}

export default Header
