
import Header from './components/Header'
import Cards from './components/Cards';
import Contact from './components/Contact'
import ContactMailIcon from '@material-ui/icons/ContactMail';
import MainCard from './components/MainCard';
import { useContext} from 'react';
import Contexto from '../src/components/store/contexto'

function App(props) {
  const ctx=useContext(Contexto)

  return (
      <>
      
      <Header/>
      {ctx.showContact && <Contact/>}
      <Cards />
      <MainCard/>
      <button onClick={ctx.cardToggleHandler}><ContactMailIcon fontSize="large"/></button>

  
      </>
  );
}

export default App;
