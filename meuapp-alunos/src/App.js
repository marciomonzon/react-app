import logo from './logo.svg';
import Home from './components/Home'
import Alunos from './components/Alunos'
import Sobre from './components/Sobre'

function App() {
  return (
    <div className="App">
      <h1>Minha aplicação React</h1>
      <ul>
        <li>Página Inicial</li>
        <li>Cadastro de Alunos</li>
        <li>Sobre</li>
      </ul>
    </div>
  );
}

export default App;
