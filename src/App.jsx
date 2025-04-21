import './App.css'   // Importa o arquivo de estilos para o App.
import Login from './Components/Login/login'   // Importa o componente Login de Login.jsx.

function App() {


  return (
    <div className="App">
      <Login />              {/*Aqui você renderiza o componente Login dentro do App.*/}
    </div>
  )
}

export default App    // Exporte o componente App para ser utilizado em outros arquivos.
