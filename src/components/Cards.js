import SchoolSharpIcon from '@material-ui/icons/SchoolSharp';
import CodeIcon from '@material-ui/icons/Code';
import WorkIcon from '@material-ui/icons/Work';
import TranslateIcon from '@material-ui/icons/Translate';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Card from './Card'
import classes from './Cards.module.css'


const Cards = (props) => {

  return (
    <div className={classes.cards}>
      <Card><SchoolSharpIcon fontSize="large" className={classes.icon}/></Card>
      <Card><CodeIcon fontSize="large" className={classes.icon}/></Card>
      <Card><TranslateIcon fontSize="large" className={classes.icon}/></Card> 
      <Card><WorkIcon fontSize="large" className={classes.icon}/></Card>
      <Card><AccountCircleIcon fontSize="large" className={classes.icon}/></Card>
    </div>
  );
};

export default Cards;