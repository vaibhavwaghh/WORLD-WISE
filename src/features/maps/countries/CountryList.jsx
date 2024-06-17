import { useContext } from "react";
import styles from "../../../cssFiles/CountryList.module.css";
import Message from "../../../pages/Message";
import CountryItem from "./CountryItem";
import { CitiesContext } from "../../../contexts/CitiesContext";
function CountryList() {
  const { state } = useContext(CitiesContext);
  const cities = state?.cities;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city in the map" />
    );
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    } else return arr;
  }, []);
  console.log(countries);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}

export default CountryList;
