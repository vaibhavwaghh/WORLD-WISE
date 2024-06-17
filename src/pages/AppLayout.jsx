// import AppNav from "../components/AppNav";
import SideBar from "./SideBar";
import styles from "./../cssFiles/AppLayout.module.css";
import Map from "../features/maps/Map";
import User from "../features/maps/UserDetails/User";
import { useUserDetails } from "../services/user/useUserDetails";
import Spinner from "./Spinner";

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
