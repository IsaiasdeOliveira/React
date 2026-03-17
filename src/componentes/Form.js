export function Form(){
    return (
        <form onSubmit={()=>alert("Submetendo formulário!")}>
          <input/>
          <button>Enviar</button>
        </form>
      );
}