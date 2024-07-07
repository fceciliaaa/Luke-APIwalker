import { useParams } from "react-router-dom";

const Starships = ({ datos }) => {
  const { id } = useParams();
  const nave = datos.find((item, index) => index == (id - 1));

  return (
    <>
      <h2> Nombre de la nave: {nave.name}</h2>
      <p> Modelo: {nave.model}</p>
      <p> Fabricante de esta nave espacial: {nave.manufacturer}</p>
    </>
  )

}

export default Starships;