import classes from './Header.module.css'
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useContext, useState } from 'react';
import Contexto from './store/contexto';
import SideBarCards from './SideBarCards';
const Header = (props) => {
  const ctx=useContext(Contexto)
  const [show,setShow]=useState(false)
  const showToggle=()=>{
    setShow(!show)
  }
  return (
    <>
      <header className={classes.header}>
        <div className={classes.ham} onClick={showToggle}><i class="fas fa-bars fa-lg"></i></div>
        {show ? <SideBarCards/> : ''}
        <h1 className={classes.title}>Nicolas Guinazu</h1>
        
        <FormControlLabel
        control={<Switch color="primary" name="checkedA" checked={ctx.checked} onChange={ctx.handleChange}/>}
        label="English"
      />
        
      </header>
    </>
  );
};

export default Header;