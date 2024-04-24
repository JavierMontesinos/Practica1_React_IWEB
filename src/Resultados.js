export default function Resultados(props){
    return(
    <div id="resultados">
      <p><b>Timezone: {props.items.timezone}</b></p>
      <p><b>El tiempo en los próximos días será:</b></p>
    <div id="Tarjeta">
      { props.items.daily.map((item,i) => {
        let dia = new Date(item.dt * 1000).toLocaleDateString();
        let temperatura = (item.temp.day-273).toFixed(2);
        if (i<props.numitems){
            return(<div key={i} id="tarjeta">
                  <p>{dia}</p>
                  <img className="tiempoimg" src={process.env.PUBLIC_URL+item.weather[0].icon+"@2x.png"}/>
                  <p>Temp: {temperatura} ºC</p>
                  <p>Humedad: {item.humidity} %</p>
                  <p>Viento: {item.wind_speed} m/s</p>
            </div>)
        }
      })}  
    </div>
    </div>
    )};