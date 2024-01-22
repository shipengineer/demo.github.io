import { useState } from "react";

const TimeInput = ({changeTimeHandler}) => {
    const [visible, setVisible] = useState(true);
const renderTime = ()=>{
    const timeTable = []
    for (let hour=1;hour<13;hour++){
        timeTable.push(`${hour}:00 am`)
    }
    for (let hour=1;hour<13;hour++){
        timeTable.push(`${hour}:00 pm`)
            }
            return timeTable;
}
    return (<div className="timeBody">
<span>TIME</span>
{visible?<span onClick={()=>{setVisible(!visible)}}>Choose Time</span>:<div>{renderTime().map((time)=>
    <div >{time}</div>
)}</div>}
</div> );
}
 
export default TimeInput;