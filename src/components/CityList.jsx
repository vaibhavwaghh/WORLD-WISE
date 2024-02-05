import Spinner from "./Spinner";
import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";
function CityList() {
  const { isLoading, cities } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city in the map" />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
