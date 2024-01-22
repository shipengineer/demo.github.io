import BookButton from '../../features/BookButton/BookButton';
import Calendar from '../../features/Calendar/Calendar';
import styles from './home-page.module.css';
const HomePage = () => {
  return (
    <>
      <h1 className={styles.h1}>Lol kek cheburek</h1>
      <BookButton id={1} />
      <Calendar />
    </>
  );
};

export default HomePage;
