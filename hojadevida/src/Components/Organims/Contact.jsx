import Title from "../Atoms/Title";
import Subtitle from "../Atoms/Subtitle";
import Lista from "./Lista";
function Contact() {
    const datos=["Numero telefonico: 9611426549", "Facebook: Alexis Juarez", "Correo: arrejuarez@gmail.com", "Universidad: Universidad politecnica de Chiapas"]
   return ( <section><div><Title mensaje="Informacion de contacto"/>
    <Subtitle informacion="Formas de contactarme:"/></div>
        <Lista datos={datos}/></section>  );
}

export default Contact;