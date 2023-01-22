import Title from "../Atoms/Title";
import Img from "../Atoms/Img";
import Alexis from "../../assets/Img/Alexis.jpg";
import Subtitle from "../Atoms/Subtitle";
import "../../assets/Styles/Header.css";
function Header() {
    return ( 
    <header>
        <Img className="Img" foto={Alexis} informacion= "Mi foto de perfil"/>
        <div><Title mensaje="Jorge Alexis Arredondo Juarez"/>
        <Subtitle informacion="Estudiante de Ingeniería en Desarrollo de Software"/></div></header> );
}

export default Header;