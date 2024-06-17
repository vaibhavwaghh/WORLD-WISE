import { useContext, useEffect } from "react";
import styles from "../cssFiles/Sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";
import { Outlet } from "react-router-dom";
import { useAllCity } from "../services/cities/useAllCity";
import { CitiesContext } from "../contexts/CitiesContext";
function SideBar({ userId }) {
  const { dispatch } = useContext(CitiesContext);
  const { isLoading, data: allCity } = useAllCity(userId);
  useEffect(() => {
    if (!isLoading && allCity) {
      dispatch({ type: "loadCities", payload: allCity });
      dispatch({ type: "updateUserId", payload: userId });
    }
  }, [isLoading, allCity, userId]);
  console.log("THIS IS ALL CITY", allCity);
  return (
    // isLoading && (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <footer className={styles.footer}></footer>
    </div>
    // )
  );
}

export default SideBar;
