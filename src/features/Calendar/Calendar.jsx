import { useReducer, useState } from 'react';
import styles from './calendar.module.css';
import moment from 'moment';
const initialState = {
  selectedDate: moment().date(),
  selectedMonth: moment().month(),
  selectedYear: moment().year(),
};
function Reducer(state, action) {
  console.log(state);
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

    case 'setYear':

    case 'setMonth':

    default:
      return state;
  }
}
const Calendar = (props) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const [visible, setVisible] = useState(true);

  return (
    <div className={styles.calendarBody}>
      <div className={styles.header}>DATE</div>
      {visible ? (
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
        </div>
      ) : (
        <span className={styles.message}>Choose Date</span>
      )}
    </div>
  );
};

export default Calendar;
