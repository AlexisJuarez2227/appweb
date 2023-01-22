import Title from "../Atoms/Title";
import Subtitle from "../Atoms/Subtitle";
import Img from "../Atoms/Img";
import Curriculum from "../../assets/Img/Curriculum.jpg"
import "../../assets/Styles/Acercademi.css"
function Acercademi() {
    return ( <section className="section"><div><Title mensaje="Acerca de mi"/>
                    <Subtitle informacion="Soy apasionado en lo que se refiere a requerimientos, ese contacto con los clientes y la planeacion de los proyectos me atrae muchisimo."/></div>
                        <Img foto={Curriculum} informacion="Curriculum"/></section> );
}

export default Acercademi;