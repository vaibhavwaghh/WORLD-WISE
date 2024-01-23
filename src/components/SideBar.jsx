import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";
import { Outlet } from "react-router-dom";
function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <footer className={styles.footer}></footer>
    </div>
  );
}

export default SideBar;
