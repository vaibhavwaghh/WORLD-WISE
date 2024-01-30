import styles from "./Map.module.css";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate("form");
      }}
    >
      <h1>Map</h1>
      <h1>
        Position : {lat} , {lng}
      </h1>
      <button
        onClick={() => {
          setSearchParams({ lat: 23, lng: 30 });
        }}
      >
        CHANGE SET
      </button>
    </div>
  );
}

export default Map;
