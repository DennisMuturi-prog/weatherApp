import { memo } from "react";
const ForeCastWeather = ({foreCastHourlyWeatherData}) => {
    const {condition,is_day,time_epoch,time,...dataWithoutCondition}=foreCastHourlyWeatherData;
    //console.log('rendered');
  return (
    <div>
        <h2>{new Date(time).toLocaleTimeString('en-US')}</h2>
        <ul>
            {Object.entries(condition).map(([key,value],index)=>{
                if(index==1){
                    return <li key={key}><img src={value}/></li>
                }
                else if(index==0){
                    return <li key={key}><strong>Condition:</strong>{value}</li>
                }       
                }  
            )}
            {Object.entries(dataWithoutCondition).map(([key,value])=>{
                    return <li key={key}><strong>{key}:</strong>{value}</li>
            }           
            )}
            
        </ul>
        </div>
  )
}

export default memo(ForeCastWeather)