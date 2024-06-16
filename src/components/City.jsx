import { useContext, useEffect } from "react";
// import { useCities } from "../contexts/CitiesContext";
import styles from "./City.module.css";
import { useParams, useSearchParams } from "react-router-dom";
import BackButton from "./BackButton";
import Spinner from "./Spinner";
import { CitiesContext } from "../contexts/CitiesContext";
const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  // TEMP DATA
  const { id } = useParams();
  const { state } = useContext(CitiesContext);
  const cities = state.cities;
  const currentCity = cities.filter((city) => city.id == id);
  console.log("THIS IS CURRENT CITY", currentCity);
  // const { getCity, currentCity, isLoading } = useCities();
  // useEffect(
  //   function () {
  //     getCity(id);
  //   },
  //   [id]
  // );

  const { cityName, emoji, date, notes } = currentCity[0];
  console.log(cityName);
  // if (isLoading) return <Spinner />;
  return (
    <>
      <div className={styles.city}>
        <div className={styles.row}>
          <h6>City name</h6>
          <h3>
            <span>{emoji}</span> {cityName}
          </h3>
        </div>
        <div className={styles.row}>
          <h6>You went to {cityName} on</h6>
          <p>{formatDate(date || null)}</p>
        </div>
        {notes && (
          <div className={styles.row}>
            <h6>Your notes</h6>
            <p>{notes}</p>
          </div>
        )}
        <div className={styles.row}>
          <h6>Learn more</h6>
          <a
            href={`https://en.wikipedia.org/wiki/${cityName}`}
            target="_blank"
            rel="noreferrer"
          >
            Check out {cityName} on Wikipedia &rarr;
          </a>
        </div>
        <div>
          <BackButton />
        </div>
      </div>
    </>
  );
}

export default City;
