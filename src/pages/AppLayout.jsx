// import AppNav from "../components/AppNav";
import SideBar from "../components/SideBar";
import styles from "./AppLayout.module.css";
import Map from "../components/Map";
import User from "../components/User";
import { useUserDetails } from "../services/useUserDetails";
import Spinner from "../components/Spinner";
import { useAllCity } from "../services/useAllCity";
import { useContext } from "react";
import { CitiesContext } from "../contexts/CitiesContext";
function AppLayout({ email }) {
  const { isLoading, data: userDetails } = useUserDetails(email);
  console.log("THIS IS USER DETAILS", userDetails);

  return isLoading ? (
    <Spinner />
  ) : (
    <div className={styles.app}>
      <SideBar userId={userDetails?.id} />
      <Map />
      <User name={userDetails.fullName} />
    </div>
  );
}

export default AppLayout;
