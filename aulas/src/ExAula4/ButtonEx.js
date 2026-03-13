export function ButtonEX(props){
    return(
        <div>
          

            <button onClick={() => alert("Botao clicado")} 
                    onMouseOver={() => console.log("Mouse Hover") } className="item_ButtonEx" style={{
                backgroundColor: props.habilitar ? "Blue" : "Red"
                }}>
                    {props.textDisplay} 
            </button>
        </div>
    )
}