import Calendar from "../../features/Calendar/Calendar";
import TimeInput from "../../features/TimeInput/TimeInput";
import styles from './tour-search.module.css'
const TourSearch = () => {
    return ( <div className={styles.widgedBody}>
        <Calendar/>
        <TimeInput/>
    </div> );
}
 
export default TourSearch;