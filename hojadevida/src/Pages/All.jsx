import Header from "../components/Organims/Header";
import Acercademi from "../components/Organims/Acercademi";
import Acercademicarrera from "../components/Organims/Acercadecarrera";
import Workxp from "../Components/Organims/Workxp";
import Contact from "../Components/Organims/Contact";
function All() {
    return ( <><Header/>
                    <Acercademi/><Acercademicarrera/><div className="section"><Workxp/><Contact/></div></> );
}

export default All;