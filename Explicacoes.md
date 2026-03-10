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
