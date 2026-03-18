import { useState } from "react";
export function Alerte({mensagem, cor },...props){
    const [mostrar, setMostrar] = useState(false)
    return(
        <div >

        <button style ={{backgroundColor: 'red', width: 200}} onClick={()=> setMostrar(!mostrar)} >
          Exibir Alerta
        </button>
        {mostrar && (<p style={{color: cor, textAlign: props.alinhamento}}>{mensagem}</p>)}
        </div>
    )
}