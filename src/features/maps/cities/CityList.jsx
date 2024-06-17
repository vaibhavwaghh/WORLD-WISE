import { useContext } from "react";
import CityItem from "./CityItem";
import styles from "../../../cssFiles/CityList.module.css";
import Message from "../../../pages/Message";
import { CitiesContext } from "../../../contexts/CitiesContext";

function CityList() {
  const { state, dispatch } = useContext(CitiesContext);

  const cities = state.cities;
  if (!cities?.length)
    return (
      <Message message="Add your first city by clicking on a city in the map" />
    );
  return (
    <ul className={styles.cityList}>
      {cities?.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
