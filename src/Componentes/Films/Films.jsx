import { useParams } from "react-router-dom";


const Films = ({ datos }) => {
  const { id } = useParams();
  const film = datos.find((item, index) => index == (id - 1));

  return (
    <>
      <h2>Titulo: {film.title}</h2>
      <p>Director: {film.director}</p>
      <p>Fecha de lanzamiento: {film.release_date}</p>
    </>
  )

}

export default Films;