import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './Components/Header'
import Fūteris from './Components/Footer';
import CardGrid from './Components/CardGrid';
import Navigacija from './Components/Navigacija';
import Tabi from './Components/Tabi';



function App() {

  return (
    <>
      <Navigacija></Navigacija>
      <Header ></Header>

      <h1>Hello React</h1>
      <p>Te būs rindkopa ar tekstu!</p>
      <Tabi></Tabi>

      <ol>
        <li>Tests</li>
        <li>Tests</li>
        <li>Tests</li>
        <li>Tests</li>
        <li>Tests</li>
      </ol>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" style={{width:"200px"}}></img>

      <CardGrid />
      <Fūteris></Fūteris>

    </>
  )
}

export default App
