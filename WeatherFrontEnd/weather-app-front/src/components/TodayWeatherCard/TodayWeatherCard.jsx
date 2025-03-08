import './TodayWeatherCard.css'
function TodayWeatherCard(props) {
    const {temp, temp_max, temp_min, humidity, wind} = props.data;

    return (
      <div className="today-weather-card flex flex-between">
        <div className="temp flex-center">
          <p>{temp}°</p>
          <p>Cloudy</p>
          <div className="flex flex-between">
            <div>
              <p>Humidity</p>
              <p>{humidity}</p>
            </div>
            <div>
              <p>Wind</p>
              <p>{wind}</p>
            </div>
          </div>
        </div>
        <p>Sydney</p>
      </div>
    );
  }
  
  export default  TodayWeatherCard;
  