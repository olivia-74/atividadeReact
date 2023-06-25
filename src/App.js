import Header from './components/Header/Header.js';
import Nav from './components/Nav/Nav.js';
import Home from './components/Page/Home.js';
// import Card from './components/Card/Card.js';
import Footer from './components/Footer/Footer.js';
// import styledGlobal, { ContainerMain, TelaInteira } from "./styledGlobal";
import CreateStyledGlobal, {ContainerMain, TelaInteira} from './styledGlobal.jsx'

function App() {

  function reproduzVideo() {
      alert("O vídeo está sendo reproduzido")
  }

  return (
    <>
    {/* <styledGlobal/> */}
    <CreateStyledGlobal/>
    <TelaInteira>
      <Header/>
      <ContainerMain>
        <Nav/>
        <Home reproduz={reproduzVideo}/>
      </ContainerMain>
      <Footer/>
    </TelaInteira>
    </>
  );

}

export default App;
