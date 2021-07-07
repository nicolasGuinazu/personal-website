
import Header from './components/Header'
import Cards from './components/Cards';
import Contact from './components/Contact'
import { useState } from 'react'; 
import ContactMailIcon from '@material-ui/icons/ContactMail';
import MainCard from './components/MainCard';

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

  
      </>
  );
}

export default App;
