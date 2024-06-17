import styles from "../cssFiles/Product.module.css";
import NavBar from "./NavBar";
export default function Product() {
  return (
    <main className={styles.product}>
      <NavBar />
      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>Discover the Power of Seamless Location Tracking</h2>
          <p>
            Welcome to WorldWise GeoLocation! Our powerful and user-friendly
            tracker is designed to help you record and manage your travels with
            ease.
          </p>
          <p>
            Whether you're a frequent traveler, a business professional, or
            simply someone who loves exploring new places, our tracker is the
            perfect tool for you.
          </p>
        </div>
      </section>
    </main>
  );
}
