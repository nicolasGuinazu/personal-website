import { useContext } from 'react';
import classes from './MainCard.module.css'
import Contexto from './store/contexto';

const MainCard = (props) => {
  const ctx=useContext(Contexto)
  return (
          <div className={classes.maincard} onClick={ctx.onShow}>
  
            {ctx.show? 'hola':'chau'}
          </div>
  )

};

export default MainCard;