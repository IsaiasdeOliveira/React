function Button(props){



    return(
        <>
            {/* <button disabled = {props.habilitar ? false : true}> {props.textDisplay}</button> 
            <button style={{
                backgroundColor: props.habilitar ? "Blue" : "Red"
                }}> {props.textDisplay}</button>
            */}

            <button onClick={() => alert("Botao clicado")} 
                    onMouseOver={() => console.log("Mouse Hover")}> 
                    {props.textDisplay} 
            </button>
        </>
    )
}
export default Button;