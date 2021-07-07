import SchoolSharpIcon from '@material-ui/icons/SchoolSharp';
import CodeIcon from '@material-ui/icons/Code';
import WorkIcon from '@material-ui/icons/Work';
import TranslateIcon from '@material-ui/icons/Translate';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Card from './Card'
import classes from './Cards.module.css'
import Contexto from './store/contexto';
import { useContext } from 'react';

const Cards = (props) => {
  const ctx=useContext(Contexto)
  return (
    <div className={classes.cards}>
      
      <Card><SchoolSharpIcon fontSize="large" className={classes.icon}onClick={ctx.onShowEdu} /></Card>
      <Card><CodeIcon fontSize="large" className={classes.icon} onClick={ctx.onShowProg}/></Card>
      <Card><TranslateIcon fontSize="large" className={classes.icon} onClick={ctx.onShowLang}/></Card> 
      <Card><WorkIcon fontSize="large" className={classes.icon} onClick={ctx.onShowJob}/></Card>
      <Card><AccountCircleIcon fontSize="large" className={classes.icon} onClick={ctx.onShowBio}/></Card>
    </div>
  );
};

export default Cards;