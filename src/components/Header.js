import classes from './Header.module.css'
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const Header = (props) => {
  
  return (
    <>
      <header className={classes.header}>
        
        <h1 className={classes.title}>Nicolas Guinazu</h1>
        
        <FormControlLabel
        control={<Switch color="primary" name="checkedA" />}
        label="English"
      />
        
      </header>
    </>
  );
};

export default Header;