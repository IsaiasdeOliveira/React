import { useState } from 'react';
export function Bola(){

    const respostas = [
        "Sim!",
        "Não.",
        "Talvez...",
        "Depende..."
    ];
    
    const [varResposta, setVarResposta] = useState("")
    const [varPergunta, setVarPergunta] = useState("")
    
    const gerarResposta = () =>{
        if(varPergunta === '') return;

        const i = Math.floor(Math.random() * respostas.length);
    
        setVarResposta(respostas[i])
        setVarPergunta("")
    }

    return(
    <>
        <h1>Bola 8 mágica!</h1>
        <h2>A bola diz: {varResposta}</h2>

        <input value= {varPergunta} onChange={(e) => setVarPergunta(e.target.value)} />
        <button onClick={gerarResposta}>Gerar resposta para minha pergunta</button>
        <button onClick={()=> setVarResposta("")}>Limpar resposta</button>
        <br/>
        <br/>
        <br/>
    </>
    )
}