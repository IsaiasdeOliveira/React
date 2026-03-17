import React, { useState } from 'react';

export function DesafioContador() {
    // 1. ESTADO INICIAL: Um array contendo objetos.
    // Cada objeto tem um ID único, um nome e um contador individual zerado.
    const [listaItens, setListaItens] = useState([
        { id: 1, nome: "Botão A", cliques: 0 },
        { id: 2, nome: "Botão B", cliques: 0 },
        { id: 3, nome: "Botão C", cliques: 0 },
    ]);

    // 2. FUNÇÃO DE CLIQUE: Atualiza APENAS o item clicado.
    const handleIncrementar = (idParaAtualizar) => {
        // Usamos o .map() para criar um NOVO array baseado no anterior.
        // O React precisa de um novo array para perceber a mudança e atualizar a tela.
        const novaLista = listaItens.map(itemAtual => {
            // Se o ID do item atual for o mesmo do botão clicado...
            if (itemAtual.id === idParaAtualizar) {
                // ...retornamos um NOVO objeto.
                // Usamos o spread (...) para copiar as propriedades antigas (id, nome)
                // e sobrescrevemos apenas a propriedade 'cliques' somando 1.
                return { ...itemAtual, cliques: itemAtual.cliques + 1 };
            }
            // Se não for o item clicado, retornamos ele exatamente como estava.
            return itemAtual;
        });

        // Atualizamos o estado com a nova lista pronta.
        setListaItens(novaLista);
    };

    // 3. CÁLCULO DO TOTAL (Estado Derivado)
    // Não precisamos de um useState para o total. Podemos calcular ele
    // toda vez que o componente é renderizado usando o método .reduce().
    // Ele percorre o array somando o valor de 'cliques' de cada item.
    const totalGeral = listaItens.reduce((acumulador, item) => {
        return acumulador + item.cliques;
    }, 0); // O '0' é o valor inicial da soma.

    // 4. RENDERIZAÇÃO (JSX)
    return (
        <div style={{ border: '2px solid #61dafb', padding: '20px', margin: '20px auto', maxWidth: '400px', borderRadius: '10px' }}>
            <h2>🏆 Desafio Aula 3</h2>
            
            {/* Exibe o total calculado */}
            <h3 style={{color: 'blue'}}>Total Geral de Cliques: {totalGeral}</h3>

            <ul>
                {/* Mapeia a lista para criar os itens na tela */}
                {listaItens.map(item => (
                    <li key={item.id} style={{ margin: '10px 0', listStyle: 'none', borderBottom: '1px solid #ccc', paddingBottom: '5px' }}>
                        {/* Exibe nome e cliques individuais */}
                        <span>{item.nome}: <strong>{item.cliques}</strong> </span>
                        
                        {/* Botão que chama a função passando o ID específico deste item */}
                        <button 
                            onClick={() => handleIncrementar(item.id)} 
                            style={{ marginLeft: '10px', cursor: 'pointer' }}
                        >
                            +1
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}