import './ForecastWeatherCard.css'
import {WiCloud, WiRain, WiDaySunny} from "weather-icons-react"

const iconsMap = {
  clear: <WiDaySunny size={24} color="400"/>,
  rain: <WiRain size={24} color="400"/>,
  cloud: <WiCloud size={24} color="400"/>
}


function ForecastWeatherCard(props) {

    const {foreCastData} = props
    return (
      <div className="forecast-weather-card flex">
       {foreCastData.map((item)=>{
        return(
          
            <div style={{margin: "0 10px"}}>
              <p>{item.day}</p>
              {iconsMap[item.weather]}
                <p>{item.min}~{item.max}</p>
                {item.weather}
            </div>
        )
       })}
      </div>
    );
  }
  
  export default ForecastWeatherCard;
  