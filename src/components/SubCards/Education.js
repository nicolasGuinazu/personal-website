import classes from './Education.module.css'
import dh from './dh.jpg'
import fceys from './fceys.jpg'
import fi from './fi.png'
import { useContext } from 'react';
import Contexto from '../store/contexto';
const Education = (props) => {
  const ctx = useContext(Contexto)
  const spanish = (<><p><img src={fi} />Licenciatura en Informatica-Facultad de Ciencias Informaticas-Universidad Nacional de La Plata (En curso)</p>
    <p><img src={fceys} />Licenciatura en Turismo-Facultad de Ciencias Económicas y Sociales. UNMDP (Finalizado)</p>
    <p><img src={dh} />Full Stack Web Development-Digital House</p></>)
  const english = (<><p><img src={fi} />Bachelor in Computer science-National University of La Plata (currently studying)</p>
    <p><img src={fceys} />Bachelor in Tourism. National University of Mar del Plata</p>
    <p><img src={dh} />Full Stack Web Development-Digital House</p></>)
  return (
    <>
      <section>
        <article className={classes.edu}>
          {ctx.checked ? english : spanish}
        </article>

      </section>

    </>
  );
};

export default Education;