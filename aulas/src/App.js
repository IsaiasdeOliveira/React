import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// Se o export for no começo
import {Header} from './componentes/Header.js'
// Se for no final
//import Header from './componentes/Header';
import Button from './componentes/Button.js'

import {Form} from './componentes/Form.js'
import {ListAulas} from './componentes/ListAulas.js'
import { Bola } from './componentes/Bola8.js';
import { Aluno } from './componentes/Aluno.js';
import { ButtonEX } from './ExAula4/ButtonEx.js';

function App() {
   return (
    <div className='App'>
      <div className='Container_header_button'>
        <h1 > Senac BCC</h1>
        <ButtonEX textDisplay="Limpar Exercicio"  className="header_button"/>
        <ButtonEX textDisplay="Trocar Tema" className="header_button" />
      </div>
      <div className='Container_Exercicios'>
      <div className='Container_Exercicio_1'>
         <ButtonEX textDisplay="Exercicio 1" /> 
      </div>
      <div className='Container_Exercicio_2'>
         <ButtonEX textDisplay="Exercicio 2"  /> 
      </div>
      <div className='Container_Exercicio_3'>
         <ButtonEX textDisplay="Exercicio 3"  /> 
      </div>

      </div>
    </div>
   )
    


  /*const arraySimples = [1, 2, 3, 4]
  const aulas = [
    {id:1, nome: "Introdução", desc: "Introdução a disciplina e a mobile", semana: 1},
    {id:2, nome: "Inicio do React", desc: "Componentes, props e eventos (e .map())!", semana: 2},
    {id:3, nome: "Hooks em React", desc: "Introdução as Hooks em React", semana: 3},
    {id:4, nome: "Outros conceitos em React", desc: "Outros conceitos em React", semana: 4},
    {id:5, nome: "ADO Sobre React", desc: "Prova", semana: 5}
  ];
  
  var valorInicialCont = 0
  const [varCont, setVarCont] = useState(valorInicialCont)
  const [varNome, setVarNome] = useState("")

  const listaAlunos = [
    "Isaias", "Maria","João", "Ana","Carlos","Beatriz", "Pedro", "Carla", "Lucas", "Mariana"]

  //const [inputText, setInputText] = useState("")
  const [search, setSearch] = useState("")

  const getvalue = (value) => {
    setSearch(value)
  }



  return(
    <div className='App'>
       <Header value={getvalue} search={search}/>
      <Aluno alunos={listaAlunos} search={search}/>
      
    </div>
  )*/

  /*return (
    <div className="App">
      <Header />
      <br/>
      <Bola />
      
      <button onClick={() => setVarCont(varCont+1)}> Aumentar contador</button>
      <h4>{varCont}</h4>  
      <input
        value={varNome} onChange={(e) => setVarNome(e.target.value)}/>
      <h4>{varNome}</h4>  
        {
          /*
      <ul>
        {arraySimples.map(
          (numero) => {return <li>{numero}</li>} 
        ) }
      </ul>
      */
      //}
      //<ListAulas/>
      //{
        /*
        <Button textDisplay="Botao 1"  />
        <Button textDisplay="Botao 2" habilitar={false} />
        <Button textDisplay="Botao 3"/>
        <Button textDisplay="Botao 4"/>
      <Form/>
        */
       // }
    //</div>
  //);
}

export default App;
