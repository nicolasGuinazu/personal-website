import classes from './Exper.module.css'
import { useContext } from 'react';
import Contexto from '../store/contexto';
const Exper = (props) => {
  const ctx = useContext(Contexto)
  const spanish =(<><p> (2018 -2020) DOCENTE ADSCRIPTO DE INVESTIGACION Y AYUDANTE DE SEGUNDA.</p>
  <p>Facultad de Ciencias Económicas
    y Sociales. Universidad Nacional
    de Mar del Plata</p>
  <p>(2018 -2019) INFORMANTE TURISTICO.
    Ente Municipal de Turismo Mar del Plata</p>
  <p>(2013 -2019) SECRETARIA Y ACREDITACIONES.
    G2 Consultora MCI Argentina</p>
  <q> XV World Congress of Comparative Education Society</q>
  <q>VI Latin American Symposium on Maternal-Foetal Interaction and Placenta</q>
  <q> LVIII - LXIV Annual meetings of the Argentine Society of Clinical Investigation.</q>
  <q> Congreso Iberoamericano de Hormigón Elaborado</q></>)
  const english =(
  <>
  <p> (2018 -2020) TEACHING AND INVESTIGATION ASSISTANT.</p>
  <p>Faculty of Economic and Social Sciences. National University of Mar del Plata</p>
  <p>(2018 -2019) TOURIST INFORMATION OFFICER.
  Mar del Plata's Municipal entity of Tourism </p>
  <p>(2013 -2019) EVENT ASSISTANT.
    G2 Consultora MCI Argentina</p>
  <q> XV World Congress of Comparative Education Society</q>
  <q>VI Latin American Symposium on Maternal-Foetal Interaction and Placenta</q>
  <q> LVIII - LXIV Annual meetings of the Argentine Society of Clinical Investigation.</q>
  </>)

 return (
    <>
      <section>
        <article className={classes.experience}>
        {ctx.checked ? english : spanish}
        </article>

      </section>

    </>
  );
};

export default Exper;