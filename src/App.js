
import Header from './components/Header'
import Cards from './components/Cards';
import Contact from './components/Contact'
import { useState } from 'react'; 
import Bio from './components/Bio'
import ContactMailIcon from '@material-ui/icons/ContactMail';
import MainCard from './components/MainCard';
import Contexto from './components/store/contexto';
function App(props) {
  const [shows,setShows]=useState(false);
  const cardToggleHandler=()=>{
    setShows(!shows) 
  }

  return (
      <>
      
      <Header/>
      {shows && <Contact/>}
      <Cards />
      <MainCard/>
      <button onClick={cardToggleHandler}><ContactMailIcon fontSize="large"/></button>
     {/*  <Bio/> */}
  
      </>
  );
}

export default App;
