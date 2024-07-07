
import './App.css'
import axios from 'axios'
import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Films from '../Films/Films';
import People from '../People/People';
import Starships from '../Starships/Starships';
import Species from '../Species/Species';
import Vehicles from '../Vehicles/Vehicles';
import Planets from '../planets/Planets';

const App = () => {

  const [datosStarWars, setDatosStarWars] = useState([]);
  const [resource, setResource] = useState('people');
  const [id, setId] = useState('');
  const navegacion = useNavigate();


  const cargarDatos = async () => {

    const URL = `https://swapi.dev/api/${resource}`

    try {
      const respuesta = await axios.get(URL);
      setDatosStarWars(respuesta.data.results);
      console.log(datosStarWars)
      navegacion(`/${resource}/${id}`)

    }
    catch (error) {
      console.log("Ocurrió un error", error);
    }

  }

  return (
    <>

      <select value={resource} onChange={(e) => setResource(e.target.value)}>
        <option value='films' >Films</option>
        <option value='people'>People</option>
        <option value='starships'>Starships</option>
        <option value='vehicles'>Vehicles</option>
        <option value='species'>Species</option>
        <option value='planets'>Planets</option>
      </select>

      <input
        type="number"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={cargarDatos}>Search</button>

      <Routes>
        <Route path="/films/:id" element={<Films datos={datosStarWars} />} />
        <Route path="/people/:id" element={<People datos={datosStarWars} />} />
        <Route path="/starships/:id" element={<Starships datos={datosStarWars} />} />
        <Route path="/vehicles/:id" element={<Vehicles datos={datosStarWars} />} />
        <Route path="/species/:id" element={<Species datos={datosStarWars} />} />
        <Route path="/planets/:id" element={<Planets datos={datosStarWars} />} />
      </Routes>
    </>
  )

}

export default App
