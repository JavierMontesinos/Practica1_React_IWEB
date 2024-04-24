import { useState } from 'react';
import './App.css';
import CONFIG from './config/config';
import {mock1} from './constants/mock';
import Header from './Header';
import Resultados from './Resultados';

const USE_SERVER = CONFIG.use_server;

function App() {
  const [lat, setLat]= useState(CONFIG.default_lat);
  const [lon, setLon]= useState(CONFIG.default_lon);
  const [resultado, setResultado] = useState("");
  const [error, setError] = useState("");

  const callServer = async () => {    
    try{
    if(USE_SERVER) {
      let queryparams = "?lat=" + lat + "&lon=" + lon + "&appid=" + CONFIG.api_key;
      const response = await fetch(`${CONFIG.server_url}${queryparams}`);
      const data = await response.json();
      if(response.status == 200){
        setResultado(data);
        setError(null);
      }
      else{
        setError(data);
      }

    }else {
      setResultado(mock1);
    }
  }
  catch(e){
    setError(e.message);
  }
}
  

  return (
    <div className="App">
        <Header/>
        <h2 id='titulo'>El tiempo</h2>
        <label>Latitud: </label><input id='latitud' type='number' placeholder="Introduzca un número" value={lat} onChange={e=>setLat(e.target.value)}/>
        <label> Longitud: </label><input type='number' id='longitud' placeholder="Introduzca un número" value={lon} onChange={e=>setLon(e.target.value)}/>
        <button type='submit' id='buscar' onClick={()=>callServer()}>Buscar</button>
        {resultado && !error && <Resultados numitems={CONFIG.num_items} items={resultado}/>}
        {error && <><br></br><div id="error"><b>Error</b></div> <p id="error_warning"><b>Se ha producido un error</b></p><p>Descripción: Obtenido error al llamar al API. Código {error.cod}</p><p>Mensaje del servidor: {error.message}</p></>}
    </div>


  );
}

export default App;
