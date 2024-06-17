import useLogout from "../../../services/auth/useLogout";
import Spinner from "../../../pages/Spinner";
import styles from "../../../cssFiles/User.module.css";

import { useNavigate } from "react-router-dom";

function User({ name }) {
  const navigate = useNavigate();
  const { logout, isLoading } = useLogout();
  function handleClick() {
    logout();
    navigate("/");
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div className={styles.user}>
      <span>Welcome, {name}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default User;
