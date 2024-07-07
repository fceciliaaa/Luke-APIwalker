import { useParams } from "react-router-dom";

const Species = ({ datos }) => {
  const { id } = useParams();
  const especie = datos.find((item, index) => index == (id - 1));

  return (
    <>
      <h2>Nombre de la especie: {especie.name}</h2>
    </>
  )

}

export default Species;