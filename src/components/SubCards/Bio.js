
import classes from './Bio.module.css'
import portrait from './portrait.jpg'
import { useContext } from 'react';
import Contexto from '../store/contexto';
const Bio = (props) => {
  const ctx = useContext(Contexto)
  const spanish=(<>  
   <img src={portrait}/>
    <div className={classes.texto}>
    <h1>Hola soy Nicolas!</h1>
    <p>Desde el 2019 inicie mi camino en el apasionante mundo de la informatica y el desarrollo web</p>
    <p> Soy Licenciado en turismo y actualmente estudio informatica en la Universisad Nacional de La Plata</p>
    <p>El compromiso y la dedicacion son las bases que definen mi desempeno profesional </p>
   
    </div>
    </>)
     const english=(<>  
      <img src={portrait}/>
       <div className={classes.texto}>
       <h1>Hi I'm Nicolas!</h1>
       <p>Since 2019 I'm learning web development</p>
       <p>I have a bachelor degree in Toursim and I'm currently studying computer science</p>
       <p>I define myself as a hard-working and commited individual </p>
      
       </div>
       </>)
    return (
      
      <>
      <section>
        <article className={classes.bio}>
        {ctx.checked ? english : spanish}

        </article>
     
      </section>
        
      </>
    );
  };
  
  export default Bio;