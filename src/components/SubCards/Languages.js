
import classes from './Languages.module.css'
import StarIcon from '@material-ui/icons/Star'
import StarOutlineIcon from '@material-ui/icons/StarOutline';
const Languages= (props) => {
  
  return (
          <div className={classes.languages} >
              <div>
              Espanol <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>
              </div>
              <div>
              Ingles  <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarOutlineIcon/>
              </div>
              <div>
              Portugues  <StarIcon/><StarOutlineIcon/><StarOutlineIcon/><StarOutlineIcon/><StarOutlineIcon/>
              </div>
              
          </div>
  )

};

export default Languages;