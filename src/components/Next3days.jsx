import { memo } from "react";
const Next3days = ({next3days,date}) => {
    const {condition,...dataWithoutCondition}=next3days;
    console.log('rendered');
  return (
    <div>
        <h2>{date}</h2>
        <ul>
            {Object.entries(condition).map(([key,value],index)=>{
                if(index==1){
                    return <li key={key}><img src={value}/></li>
                }
                else if(index==0){
                    return <li key={key}><strong>Cloud:</strong>{value}</li>
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

export default memo(Next3days)