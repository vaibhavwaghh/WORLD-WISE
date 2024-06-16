import Spinner from "./Spinner";
import styles from "./CountryList.module.css";
import Message from "./Message";
import CountryItem from "./CountryItem";
import { useContext } from "react";
import { CitiesContext } from "../contexts/CitiesContext";
// import { useCities } from "../contexts/CitiesContext";
function CountryList() {
  // const { cities, isLoading } = useCities();

  // if (isLoading) return <Spinner />;
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
  // return <>VAIBHAV</>;
}

export default CountryList;
