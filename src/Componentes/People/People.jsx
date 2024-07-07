import { useParams } from "react-router-dom";

const People = ({ datos }) => {

  const { id } = useParams();
  const persona = datos.find((item, index) => index == (id - 1));

  return (
    <>
      <h3>Nombre: {persona.name}</h3>
      <p>Color de ojos: {persona.eye_color}</p>
      <p>Altura: {persona.height}</p>
      <p>Peso: {persona.mass}</p>
      <p>Color de piel: {persona.skin_color}</p>
    </>
  )

}

export default People;