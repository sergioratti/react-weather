import './weather-item.css';

const formatTemp = (temp) => {
    return `${temp.toFixed(0)}°`
}

const getMinTem = (list) => {
    return list.reduce((min, cur) => {
        return Math.min(min, cur.main.temp_min)
    }, Infinity)
}

const getMaxTem = (list) => {
    return list.reduce((max, cur) => {
        return Math.max(max, cur.main.temp_min)
    }, -Infinity)
}

function WeatherItem({ dayName, weatherDayData }) {

    return (
        <div className="WeatherItem">
            <div className="WeatherItemDayName">{dayName}</div>
            <img src={`${process.env.REACT_APP_WEATHER_IMAGE_URL}/${weatherDayData[0].weather[0].icon}@2x.png`} alt="" />
            <div className="WeatherItemTempBox">
                <div className="WeatherItemTempMax">{formatTemp(getMaxTem(weatherDayData))}</div>
                <div className="WeatherItemTempMin">{formatTemp(getMinTem(weatherDayData))}</div>
            </div>
        </div>
    );
}

export default WeatherItem;
