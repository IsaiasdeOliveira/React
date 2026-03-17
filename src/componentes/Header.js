import '../App.css'

import logo from '../assets/senac-logo.png'


function BotaoAlerta({textDisplay, curso}){
    
    const mensagem = textDisplay + ' - ' + curso.nome
    return(
        <>
        <button onClick={()=> alert(mensagem)}>{textDisplay}</button>
        </>
    )
}

export function Header({value, ...props}){
    //const curso = "TSI"
    const curso = {
        nome:"BCC", 
        detalhes: "Bacharelado em Ciência da Computação"
    }

    const {inputText, setInputText} = props

    const handleInputChange = (event) => {
        value(event.target.value)
    }


    return (

        <div>
            <img src={logo} />
            <h1> Oi {curso.nome}...</h1> 
            <h2>Boa noite alunos de {curso.detalhes}</h2>
            {/*<input  onChange={handleInputChange}/>*/}

            <input  onChange={handleInputChange}/>
            <h3>{inputText}</h3>
        </div>
        /*<div>
            <img src={logo} />
            <h1> Oi {curso.nome}...</h1> 
            <h2>Boa noite alunos de {curso.detalhes}</h2>

            /*<button onClick={()=> alert(curso.nome + " " + curso.detalhes)}>Botao!</button>
            <BotaoAlerta textDisplay="Botao de alerta de curso" curso={curso} />*/
       // </div>
    )
}
