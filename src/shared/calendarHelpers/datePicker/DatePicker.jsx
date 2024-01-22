import moment from "moment";
import DayTable from "../DayTable/DayTable";

const DatePicker = (props) => {
const {selectedDate,selectedMonth}={...props.props}
const d = moment();
const daysInMonth = d.daysInMonth(selectedMonth);
const daysInPreviousMonth = d.daysInMonth(selectedMonth-1)
const startDayOfMonth = d.month(selectedMonth).date(1).day();
const previousMothLastDay = d.month(selectedMonth-1).date(daysInPreviousMonth).day();
    return ( <DayTable prevDay={previousMothLastDay} curDay={selectedDate} monthDays={daysInMonth} /> );
}
 
export default DatePicker;