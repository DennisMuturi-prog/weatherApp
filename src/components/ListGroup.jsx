import { memo } from "react";
const ListGroup = ({currentWeatherData}) => {
    const {condition,last_updated_epoch,last_updated,is_day,...dataWithoutCondition}=currentWeatherData;
    //console.log('rendered');
  return (
    <div>
        <h2>Current {new Date().toLocaleTimeString('en-US')}</h2>
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

export default memo(ListGroup)