

import classes from './MainCard.module.css'
import ProgLag from './SubCards/ProgLag';
import Education from './SubCards/Education';
import Languages from './SubCards/Languages';
import Bio from './SubCards/Bio';
import { useContext } from 'react';
import Contexto from './store/contexto';
const MainCard = (props) => {
  const ctx=useContext(Contexto)
  return (
          <div className={classes.maincard} >
            {ctx.showEdu && <Education/>} 
            {ctx.showProg && <ProgLag/>} 
            {ctx.showLang && <Languages/>}
            {ctx.showBio && <Bio/>}
          </div>
  )

};

export default MainCard;