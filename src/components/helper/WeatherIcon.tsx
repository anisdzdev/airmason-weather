const WeatherIcon = ({icon, hasError} : {icon: string, hasError: boolean}) => (
    <div className="icon_weather">
        {icon && !hasError ?
            <img src={require('../../assets/images/' + icon + '.png')} width="96" alt="weather"/>
            :
            <img src={require('../../assets/images/error.png')} width="96" alt="weather"/>
        }
    </div>
);

export default WeatherIcon;