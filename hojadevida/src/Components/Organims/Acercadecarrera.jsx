import Title from "../Atoms/Title";
import Subtitle from "../Atoms/Subtitle";
import Img from "../Atoms/Img";
import Carrera from "../../assets/Img/Carrera.jpg"
import Lista from "./Lista";
function Acercademicarrera() {
    const datos=["Css", "Html", "JavaScript", "Java"]
    return ( <section><Img foto={Carrera} informacion="Imagen de codigo"/>
                            <div><Title mensaje="Tecnologias"/>
                                <Subtitle informacion="Se utilizar los siguientes lenguajes:"/>
                                    <Lista datos={datos}/></div></section> );
}

export default Acercademicarrera;