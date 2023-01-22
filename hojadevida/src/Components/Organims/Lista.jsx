import Datos from "../Atoms/Datos";
function Lista({datos}) {
    return ( <div>{datos.map((item)=>(<Datos info={item}/>))} </div>);
}

export default Lista;