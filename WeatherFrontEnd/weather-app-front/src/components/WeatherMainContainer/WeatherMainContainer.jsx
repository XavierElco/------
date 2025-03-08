import CityWeatherCard from "../CityWeatherCard/CityWeatherCard";
import ForecastWeatherCard from "../ForecastWeatherCard/ForecastWeatherCard";
import TodayWeatherCard from "../TodayWeatherCard/TodayWeatherCard";
import './WeatherMainContainer.css'

function WeatherMainContainer() {

    const apiData = {
        temp: 32,
        temp_max: 35,
        temp_min:31,
        humidity: 2,
        wind: 1,
    }

    const cityData = [
        {
            day: "Mon",
            min: 18,
            max:19,
            city: 'sydney',
        },
        {
            day: "Tue",
            min: 18,
            max: 19,
            city: 'mel',
        },
        {
            day: "Wed",
            min: 18,
            max: 20,
            city: 'bri'
        },
        {
            day: "Thu",
            min: 18,
            max: 20,
            city: 'perth'
        }
    ];

    const foreCastData = [{
        day: "Mon",
        min: 18,
        max:19,
        weather:'clear'
        
    },
    {
        day: "Tue",
        min: 18,
        max: 19,
        weather:'rain'
      
    },
    {
        day: "Wed",
        min: 18,
        max: 20,
        weather:'cloud'
    
    },
    {
        day: "Thu",
        min: 18,
        max: 20,
        weather:'clear'
    }]

  return (
    <div className="weather-main-container">
        <TodayWeatherCard data={apiData}/>
        <div className="flex">
            <CityWeatherCard cities={cityData}/>
            <ForecastWeatherCard foreCastData = {foreCastData}/>
            
        </div>
    </div>
  );
}

export default  WeatherMainContainer;
