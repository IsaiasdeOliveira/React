import { ListAulas } from "./ListAulas"

export function Aluno({alunos,search, ...props}){

   const filtereAlunos= alunos.filter(aluno => aluno.toLowerCase().includes(search.toLowerCase()));

  return(
    <div>
        <h2>Lista de Alunos</h2>
        
        {filtereAlunos.length === 0 ? (
            <p>Nenhum aluno encontrado</p>
         ) : (
            <ul>
                {filtereAlunos.map((aluno, index) => (
                    <li key={index}>{aluno}</li>
                ))}
            </ul>
        )}
    </div>
    )
}

