import useLogout from "../services/useLogout";
import { useUserDetails } from "../services/useUserDetails";
import Spinner from "./Spinner";
import styles from "./User.module.css";
// import { useAuth } from "../contexts/FakeAuthContex";
import { useNavigate } from "react-router-dom";

function User({ name }) {
  // const { user, logout } = useAuth();

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

/*
CHALLENGE

1) Add `AuthProvider` to `App.jsx`
2) In the `Login.jsx` page, call `login()` from context
3) Inside an effect, check whether `isAuthenticated === true`. If so, programatically navigate to `/app`
4) In `User.js`, read and display logged in user from context (`user` object). Then include this component in `AppLayout.js`
5) Handle logout button by calling `logout()` and navigating back to `/`
*/
