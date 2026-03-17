import { useState } from 'react';
import '../App.css';
import { Card } from './Card';
export function ListAulas(){

    
    const aulas = [
        {id:1, nome: "Introdução", desc: "Introdução a disciplina e a mobile", semana: 1},
        {id:2, nome: "Inicio do React", desc: "Componentes, props e eventos (e .map())!", semana: 2},
        {id:3, nome: "Hooks em React", desc: "Introdução as Hooks em React", semana: 3},
        {id:4, nome: "Outros conceitos em React", desc: "Outros conceitos em React", semana: 4},
        {id:5, nome: "ADO Sobre React", desc: "Prova", semana: 5}
    ];

    const [arrAulas, setArrAulas] = useState(aulas)
    const [varItem, setNovoItem] = useState("")
    
    const adicionarAulas = () => {
        if(varItem === '') return;

        var obj = {
            nome: varItem
        }
        setArrAulas([...arrAulas, obj])
    }

    return(
        <div className="itemsContainer">
            <input 
            value={varItem}
            onChange={(e) => setNovoItem(e.target.value)}/>
            <button onClick={adicionarAulas}>Adicionar aula</button>
            <ul>
            {arrAulas.map(
                (aula) => <Card id={aula.id}  nome={aula.nome} desc={aula.desc} semana={aula.semana}/>
            ) }
            </ul>
        </div>
    )
}
