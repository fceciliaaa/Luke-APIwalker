import { useParams } from "react-router-dom";

const Vehicles = ({ datos }) => {
  const { id } = useParams();
  const vehiculo = datos.find((item, index) => index == (id - 1));

  return (
    <>
      <h2> Nombre del vehiculo: {vehiculo.name}</h2>
      <p> Modelo: {vehiculo.model}</p>
      <p> Cantidad de pasajeros: {vehiculo.passengers}</p>
      <p> Fabricante de esta nave espacial: {vehiculo.manufacturer}</p>
    </>
  )

}

export default Vehicles;