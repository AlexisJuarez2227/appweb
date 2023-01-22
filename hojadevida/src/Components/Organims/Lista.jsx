import Datos from "../Atoms/Datos";
function Lista({datos, imagen}) {
    return ( <div>{datos.map((item)=>(<Datos info={item}/>))} </div>);
}

export default Lista;