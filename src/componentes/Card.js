import '../App.css';
export function Card({nome, desc, ...props}){
    return(
        <div className='item'>
            <h2>{nome}</h2>
            <h3>{desc}</h3>
            <h3>{props.id}</h3>

        </div>
    )
}