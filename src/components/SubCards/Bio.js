
import classes from './Bio.module.css'
import portrait from './portrait.jpg'
const Bio = (props) => {
    return (
      <>
      <section>
        <article className={classes.bio}>
        <img src={portrait}/>
        <div className={classes.texto}>
        <h1>Hola soy Nicolas!</h1>
        <p>Desde el 2019 inicie mi camino en el apasionante mundo de la informatica y el desarrollo web</p>
        <p> Soy Licenciado en turismo y actualmente estudio informatica en la Universisad Nacional de La Plata</p>
        <p>El compromiso y la dedicacion son las bases que definen mi desempeno profesional </p>
       
        </div>
        
        </article>
     
      </section>
        
      </>
    );
  };
  
  export default Bio;