import './weather-list.css';
import WeatherItem from '../weather-item/weather-item';
import * as _ from 'lodash'


const splitByDay = (hourlyData)=>{
  let dayNames = ['Dom','Lun','Mar','Mer','Gio','Ven','Sab']
  return _.toPairs(_.groupBy(hourlyData,item=>{
    return dayNames[new Date(Date.parse(item.dt_txt)).getDay()]
  }));
}

function WeatherList({ weatherdata }) {

  return (
    <div className="WeatherList">
      {weatherdata.city.name}
      <ul>
        {splitByDay(weatherdata.list).map(function (dayData, index) {
          return <li key={index}><WeatherItem dayName={dayData[0]} weatherDayData={dayData[1]}/></li>;
        })}
      </ul>
    </div>
  );
}

export default WeatherList;
