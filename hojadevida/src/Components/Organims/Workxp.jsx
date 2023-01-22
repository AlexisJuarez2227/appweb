import Title from "../Atoms/Title";
import Subtitle from "../Atoms/Subtitle";
import Img from "../Atoms/Img";
import Xpwork from "../../assets/Img/Xpwork.jpg"
function Workxp() {
    return (  <section><div><Title mensaje="Experiencia de trabajo"/>
    <Subtitle informacion="No tengo experiencia de trabajo, pero tengo muchas ganas de aprender y he tenido algunas experiencias en la escuela trabajando en proyectos."/></div>
        <Img foto={Xpwork} informacion="Xpwork"/></section> );
}

export default Workxp;