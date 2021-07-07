

import classes from './MainCard.module.css'
import ProgLag from './SubCards/ProgLag';
import Languages from './SubCards/Languages';
const MainCard = (props) => {
  
  return (
          <div className={classes.maincard} >
            {/* <ProgLag/> */}
            <Languages/>
          </div>
  )

};

export default MainCard;