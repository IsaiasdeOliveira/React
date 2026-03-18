import { useState } from 'react'
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

export function Header_2({tema,isDark,  value, ...props}){
    //const curso = "TSI"
    const curso = {
        nome:"BCC", 
        detalhes: "Bacharelado em Ciência da Computação"
    }

    const handleInputChange = (e) => {
        //setInputText(e.target.value)
        value(e.target.value)
    }

    return (
        <div>
            <img src={logo} />
            <header className={'header'} style={{ 
                    backgroundColor: isDark ? 'black' : '#f0f0f0', 
                    color: isDark ? 'white' : 'black',
                    padding: '10px' 
                }}>
            <h3 style={{marginLeft:'50px'}}>SENAC - MOBILE</h3>
           {/* <button onClick={()=>action()} style={{marginLeft:'50px', marginRight:'-400px'}}>Limpar Exercício</button>*/}
            <button onClick={()=>tema()}>Trocar tema</button>
            </header>
            
            {/**
             * <h1> Oi {curso.nome}...</h1> 
            <h2>Boa noite alunos de {curso.detalhes}</h2>
            

            <br/>
            <br/>
            <input
                type="text"
                value={props.search}
                onChange={handleInputChange}
            />
            **/
            }
            {/** 
             *
             
             <button onClick={()=> alert(curso.nome + " " + curso.detalhes)}>Botao!</button>
             <BotaoAlerta textDisplay="Botao de alerta de curso" curso={curso} />
             */
            }
        </div>
    )
}
