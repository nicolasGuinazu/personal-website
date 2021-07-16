import classes from './Education.module.css'
import dh from './dh.jpg'
import fceys from './fceys.jpg'
import fi from './fi.png'
import { useContext } from 'react';
import Contexto from '../store/contexto';
const Education = (props) => {
  const ctx = useContext(Contexto)
  const spanish = (<><p><img src={fi} alt="UNLP logo"  /> Licenciatura en Informática - Facultad de Ciencias Informáticas-Universidad Nacional de La Plata (En curso)</p>
    <p><img src={fceys} alt="fceys logo" />Licenciatura en Turismo-Facultad de Ciencias Económicas y Sociales. UNMDP (Finalizado)</p>
    <p><img src={dh} alt="digital-house logo"/>Full Stack Web Development-Digital House</p></>)
  const english = (<><p><img src={fi} alt="UNLP logo" />Bachelor in Computer science-National University of La Plata (currently studying)</p>
    <p><img src={fceys} alt="UNMDP logo"/>Bachelor in Tourism. National University of Mar del Plata</p>
    <p><img src={dh} alt="digital-house logo"/>Full Stack Web Development-Digital House</p></>)
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