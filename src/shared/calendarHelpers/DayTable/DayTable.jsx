import { useEffect } from "react";
import styles from "./day-table.module.css";
const DayTable = ({ prevDay, curDay, monthDays, }) => {
  const summary = [];
  for (let day = 1; day <= prevDay; day++) {
    summary.push([25 + day, 0]);
  }
  for (let day = 1; day <= monthDays; day++) {
    summary.push([day, 1]);
  }
  if (summary.length <= 42) {
    const addDays = 42 - summary.length;
    for (let day = 1; day <= addDays; day++) {
      summary.push([day, 0]);
    }
  }
  const resultTable = [];
  for (let index = 0; index < 42; index+=7) {
   resultTable.push(summary.slice(index,index+7))
    
  }
useEffect(()=>{
 
document.querySelectorAll('td').forEach((date)=>{
  console.log(date.style.backgroundColor);
  date.style.border='none'
  if(date.className.includes('greyDay')){
    date.style.backgroundColor='lightgrey'
  }else{
    date.style.backgroundColor='white'
  }

  if(date.textContent===`${curDay}`&&date.style.backgroundColor!=='lightgrey'){
date.style.backgroundColor='orange'
date.style.border = '0px solid  orange'
date.style.borderRadius='100%'
  }
})

},[curDay])
  const renderDay = (day) => {
    if (day[1] === 0) {
      return <td className={`${styles.greyDay}  ${styles.shell}`}  key={day}>{day[0]}</td>;
    }
    if (day[1] === 1) {
      return <td className={`${styles.whiteDay} ${styles.shell}`}  key={day}>{day[0]}</td>;
    }
  };
  
  
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>Пн</td>
            <td>Вт</td>
            <td>Ср</td>
            <td>Чт</td>
            <td>Пт</td>
            <td>Сб</td>
            <td>Вс</td>
          </tr>
          {resultTable.map((week)=>(<tr key={week}>{week.map(day=>renderDay(day))}</tr>))}
        </tbody>
      </table>
    </>
  );
};

export default DayTable;
