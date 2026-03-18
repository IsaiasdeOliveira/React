function Button(props){



    return(
        <>
            {/* <button disabled = {props.habilitar ? false : true}> {props.textDisplay}</button> 
            <button style={{
                backgroundColor: props.habilitar ? "Blue" : "Red"
                }}> {props.textDisplay}</button>
            */}

            <button onClick={() => alert("BCC")} > 
                    Botão 1
            </button>
            <button onClick={() => alert("Isaias")} > 
                    Botão 2
            </button>
            <button onClick={() => alert("Maia")} > 
                    Botão 3
            </button>
        </>
    )
}
export default Button;