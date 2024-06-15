import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";
import './styles/ButtonsSpam.css'

const ButtonsSpam = () => {
  return (
    <div className="buttons__container">
      <a className="button__circle circle__green animate__animated animate__tada" href="https://wa.me/+573195977937?text=Hola%20estoy%20interesado%20en%20tus%20servicios%20de%20desarrollo%20web" target="_blank" >
        <FaWhatsapp />
      </a>
      <a className="button__circle circle__red animate__animated animate__tada" href='#contact'>
        <MdOutlineMail />
      </a>
    </div>
  )
}

export default ButtonsSpam
