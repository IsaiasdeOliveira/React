# Explicações das Aulas de React

## Componentes

Os componentes são as menores partes de uma aplicação React. Eles são autônomos, reutilizáveis e especializados.

Em vez de construir uma página inteira como um único bloco de código (monolítico), no React criamos pequenos módulos, onde cada componente possui uma responsabilidade específica. Esses componentes podem ser reutilizados em diferentes partes da aplicação.

### Exemplo

![Visualização dos componentes na página da Shopee](/img/Componentes_Exemplo.png)

## Convenções utilizadas

Por convenção, os nomes dos componentes em React começam com letra maiúscula e utilizam o padrão PascalCase, onde cada nova palavra também começa com letra maiúscula.

Exemplos:

```
ListAulas
Header
UserProfile
```

## Formas de criar um componente

Existem duas formas comuns de criar um componente em React.

### 1. Criar a função e exportar depois

Primeiro criamos a função e depois exportamos ela.

```javascript
function ListAulas(){
  return(
    <h1>Listar Aulas</h1>
  )
}

export { ListAulas }
```

### 2. Exportar diretamente na declaração da função

Também podemos exportar o componente diretamente ao criá-lo.

```javascript
export function ListAulas(){
  return(
    <h1>Listar Aulas</h1>
  )
}
```

As duas formas funcionam da mesma maneira.

## Importando o componente

Para utilizar o componente em outro arquivo, como no `App.js`, utilizamos o `import`.

```javascript
import { ListAulas } from "./componentes/ListAulas"
```

Depois disso, podemos utilizar o componente dentro do JSX:

```jsx
<ListAulas />
```

## Props

Props (properties) são como argumentos passados para componentes. Elas permitem enviar dados de um componente pai para um componente filho.

Isso permite que um componente seja dinâmico e reutilizável.

### Exemplo com o componente Header

```javascript
export function Header(props){
  return(
    <div>
      <p>Bem-vindo {props.nome}!</p>
    </div>
  )
}
```

### Utilizando o componente no App.js

```javascript
import './App.css';
import { Header } from "./componentes/Header"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header nome="Gabriel" />
      </header>
    </div>
  );
}

export default App;
```

Nesse exemplo, o valor "Gabriel" é passado como prop para o componente `Header`, que exibe o nome na tela.

## Hooks: `useState`
O `useState` permite adicionar um estado ao componente, funcionando como uma memória que, ao ser alterada, faz o React renderizar a interface novamente.

### Exemplo de Gerenciamento de Estado
No componente `ListAulas.js`, usamos o estado para gerenciar uma lista dinâmica e o valor de um novo item:

```JavaScript
const [arrAulas, setArrAulas] = useState(aulas) // Estado para a lista
const [varItem, setNovoItem] = useState("")     // Estado para o input
```

## Manipulação de Listas e Arrays
No React, utilizamos o método `.map()` para transformar um array de dados em elementos visuais.

### Como criar uma lista dinâmica
No componente `ListAulas.js`, definimos um array de objetos onde cada item possui várias propriedades (ID, nome, descrição, semana). Podemos passar todas essas variáveis para cada componente da lista através das props.

```JavaScript
const aulas = [
    {id:1, nome: "Introdução", desc: "Introdução a mobile", semana: 1},
    {id:2, nome: "React", desc: "Componentes e Props", semana: 2}
];

return (
    <ul>
        {aulas.map((aula) => (
            // Passando múltiplas variáveis para o componente Card
            <Card 
                key={aula.id} 
                id={aula.id} 
                nome={aula.nome} 
                desc={aula.desc} 
                semana={aula.semana} 
            />
        ))}
    </ul>
);
```
Importância da `key`: O React exige uma chave única (geralmente o ID) para cada item da lista para otimizar a renderização.

## Eventos e Manipulação de Inputs
Os eventos permitem que o usuário interaja com a aplicação, como clicar em botões ou digitar em campos de texto.

### Capturando digitação (`onChange`)
Para capturar o que o usuário digita e mostrar o texto em tempo real embaixo do input, usamos o evento `onChange`.

```JavaScript
const handleInputChange = (event) => {
    value(event.target.value) // Envia o valor atual para a função pai
}

return (
    <div>
        <input onChange={handleInputChange}/>
        <h3>{inputText}</h3> {/* Exibe o texto digitado imediatamente abaixo */}
    </div>
)
```
### Cliques e Alertas (`onClick`)
O evento `onClick` é usado para disparar funções, como exibir alertas de "enviado".

```JavaScript
<button onClick={() => alert("Botao clicado")}> 
    {props.textDisplay} 

</button> // Dispara um alerta ao ser clicado
```

## Renderização Condicional
Podemos usar lógica JavaScript para decidir o que mostrar na tela.

### Exemplo de lista vazia:

```JavaScript
{filtereAlunos.length === 0 ? (
    <p>Nenhum aluno encontrado</p> // Mensagem exibida se o filtro não retornar nada
) : (
    <ul>{/* lista mapeada */}</ul>
)}
```

## Adicionando Itens (Imutabilidade)
Para adicionar novos itens a uma lista, usamos o Spread Operator (`...`) para criar uma cópia do array existente e adicionar o novo objeto.

```JavaScript
const adicionarAulas = () => {
    if(varItem === '') return;
    var obj = { nome: varItem }
    setArrAulas([...arrAulas, obj]) // Cria novo array mantendo os antigos e somando o novo
}
```

## Evolução dos Exercícios em Aula
Cada aula introduziu um conceito novo através de aplicações práticas:

### Aula 2: Formulários e Listas Iniciais
`Form.js`: Foco em eventos de envio (`onSubmit`) e interações básicas.

`ListAulas.js`: Primeira implementação de uma lista de objetos usando `.map()` e adição de novos itens ao array usando o Spread Operator (...).

### Aula 3: Lógica e Filtros
`Bola8.js`: Uso do `useState` para criar lógica de sorteio aleatório com `Math.random()`.

`Aluno.js`: Implementação de busca dinâmica. Utilizamos o método `.filter()` para comparar o que o usuário digita com a lista de alunos, exibindo apenas os resultados correspondentes.

Desafio Contador: Exercício para gerenciar cliques individuais em cada item de uma lista e calcular um total geral.

### Aula 4: Sistemas Unificados e Estados Complexos
Calculadoras: Exercícios de conversão de tipos (parseFloat) para realizar cálculos matemáticos e validações, como erro de divisão por zero.

`ClimaTempo.js`: Uso de estados compostos (objetos) para gerenciar múltiplos campos de entrada ao cadastrar uma nova cidade.

Navegação no `App.js`: Uso de renderização condicional para alternar entre os exercícios e troca de tema (Dark/Light) via CSS dinâmico.

# React Native

## Rodando um projeto React Native
## ....


## Componentes Básicos 

React Native não utiliza HTML, ou seja: Não se utiliza <div>, <p>, <h1>

Em vez disso, se utiliza os componentes visuais : ```View```, ```Text``` e ```SafeAreaView```.

###  View

É o componente base para criar contêineres, parecido com uma <div> do React Web. Serve para organizar e agrupar elementos na tela.

Exemplos de uso: Criar um layout, Criar caixas, colunas, linhas, Agrupar textos, imagens, botões.

#### Exemplo: 

```
<View style={{ backgroundColor: 'lightgray', padding: 20 }}>
  <Text>Conteúdo dentro da View</Text>
</View>
```

### Text

É o componente utilizado exclusivamente para texto. Diferente do HTML, no React Native qualquer texto deve estar dentro de um <Text>.

Exemplos de uso: Títulos, Parágrafos, Labels, Mensagens na tela.

#### Exemplo: 
```

<Text style={{ fontSize: 20 }}>
  Olá, React Native!
</Text>

```
### SafeAreaView

Uma versão especial do View que evita que o conteúdo apareça: atrás do notch, atrás da barra de status, atrás da borda inferior curvada ou em áreas sensíveis do sistema.

#### Exemplo: 

```
<SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
  <Text>Conteúdo seguro</Text>
</SafeAreaView>
```

## Exemplo prático combinando os três

```
<SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
  <View style={{ padding: 20 }}>
    <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
      Bem-vindo!
    </Text>

    <Text style={{ marginTop: 10 }}>
      Esta é a sua primeira tela em React Native.
    </Text>
  </View>
</SafeAreaView>
```



