import classes from './Bio.module.css'
import selff from './selff.jpg'
const Bio = (props) => {
    return (
      <>
      <section>
        <article className={classes.card}>
        <img src={selff}/>
        <div className={classes.texto}>
        <p>Hola soy Nicolas! </p>
        </div>
        
        </article>
     
      </section>
        
      </>
    );
  };
  
  export default Bio;