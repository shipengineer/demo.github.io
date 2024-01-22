import {  useReducer, useState } from 'react';
import styles from './calendar.module.css';
import moment from 'moment';
import DatePicker from '../../shared/calendarHelpers/datePicker/DatePicker.jsx';
const initialState = {
  selectedDate: moment().date(),
  selectedMonth: moment().month(),
  selectedYear: moment().year(),
};
function Reducer(state, action) {
  switch (action.type) {
    case 'incrementMonth':
      if (state.selectedMonth > 10) {
        return {
          ...state,
          selectedYear: state.selectedYear + 1,
          selectedMonth: 0,
        };
      } else {
        return {
          ...state,
          selectedMonth: state.selectedMonth + 1,
        };
      }

    case 'decrementMonth':
      if (state.selectedMonth < 1) {
        return {
          ...state,
          selectedYear: state.selectedYear - 1,
          selectedMonth: 11,
        };
      } else {
        return {
          ...state,
          selectedMonth: state.selectedMonth - 1,
        };
      }
    case 'setDate':
      return {...state,selectedDate:action.newDate}
    default:
      return state;
  }
}
const Calendar = () => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const [visible, setVisible] = useState(true);

  function datePickHandler(e){
    
    e.preventDefault();
    dispatch({type:'setDate',newDate: Number.parseInt(e.target.textContent)})
  }
 
  return (
    <div className={styles.calendarBody} onClick={datePickHandler}>
      <div className={styles.header} onClick={()=>setVisible(!visible)}>{visible?'Choose Date':'DATE'}</div>
      {visible && (
        <div className={styles.month}>
          <span>
            {moment().month(state.selectedMonth).format('MMMM')}
            {moment().year(state.selectedYear).format('YYYY')}
          </span>

          <button
            className={styles.leftArrow}
            onClick={() => dispatch({ type: 'decrementMonth' })}
          >
            -
          </button>
          <button
            className={styles.rightArrow}
            onClick={() => {
              dispatch({ type: 'incrementMonth' });
            }}
          >
            +
          </button>
          <div className={styles.calendarTable}></div>
          <DatePicker props = {state} />
        </div>
      ) }
    </div>
  );
};

export default Calendar;
