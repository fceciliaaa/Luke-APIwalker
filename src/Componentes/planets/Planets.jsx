import { useParams } from "react-router-dom";

const Planets = ({ datos }) => {

  const { id } = useParams();
  const planeta = datos.find((item, index) => index == (id - 1));

  return (
    <>
      <h2>Nombre del planeta: {planeta.name}</h2>
      <p>Diametro: {planeta.diameter}</p>
      <p>Poblacion: {planeta.population}</p>
      <p>Clima: {planeta.climate}</p>
    </>
  )

}

export default Planets;