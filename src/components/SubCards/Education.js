import classes from './Education.module.css'
import dh from './dh.jpg'
import fceys from './fceys.jpg'
import fi from './fi.png'
const Education = (props) => {
    return (
      <>
      <section>
        <article className={classes.edu}>
        
        <p><img src={fi}/>Licenciatura en Informatica-Facultad de Ciencias Informaticas-Universidad Nacional de La Plata (En curso)</p>
        <p><img src={fceys}/>Licenciatura en Turismo-Facultad de Ciencias Económicas y Sociales. UNMDP (Finalizado)</p>
        <p><img src={dh}/>Full Stack Web Development-Digital House</p>

        </article>
     
      </section>
        
      </>
    );
  };
  
  export default Education;