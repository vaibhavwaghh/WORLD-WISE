import styles from "../../../cssFiles/CityItem.module.css";
import { Link } from "react-router-dom";
import Spinner from "../../../pages/Spinner";
import useDeleteCity from "../../../services/cities/useDeleteCity";
function CityItem({ city }) {
  const { lat, lng, emoji, cityName, date, id } = city;
  const { isLoading, deleteCity } = useDeleteCity();
  const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(date));
  function handleClick(e) {
    e.preventDefault();
    deleteCity(id);
  }
  return isLoading ? (
    <Spinner />
  ) : (
    <li>
      <Link
        className={`${styles.cityItem}`}
        // className={`${styles.cityItem} ${
        //   id === city.id ? styles["cityItem--active"] : ""
        // }`}
        to={`${id}?lat=${lat}&lng=${lng}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn} onClick={handleClick}>
          &times;
        </button>
      </Link>
    </li>
  );
  // return <>{city.cityName}</>;
}

export default CityItem;
