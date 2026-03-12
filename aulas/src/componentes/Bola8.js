import { useState } from 'react';
export function Bola(){

    const respostas = [
        "Sim!",
        "Não.",
        "Talvez...",
        "Depende..."
    ];
    
    const [varResposta, setVarResposta] = useState("")
    
    const gerarResposta = () =>{
        const i = Math.floor(Math.random() * respostas.length);
    
        setVarResposta(respostas[i])
    }

    return(
    <>
        <h1>Bola 8 mágica!</h1>
        <h2>A bola diz: {varResposta}</h2>

        <button onClick={gerarResposta}>Gerar resposta para minha pergunta</button>
        <button onClick={()=> setVarResposta("")}>Limpar resposta</button>
        <br/>
        <br/>
        <br/>
    </>
    )
}