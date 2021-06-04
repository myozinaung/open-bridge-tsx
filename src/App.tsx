import "openbridge-css/dist/css/openbridge.css"; //npm install openbridge-css
import AzimuthDemo from "./AzimuthDemo";
import DimmingMenu from "./components/navigation/dimming-menu/dimming-menu";
import TopNavbar from "./components/navigation/top-navbar";
import styles from "./app.module.css";
function App() {
  return (
    <div className={styles.fullScreeApp}>
      <TopNavbar />

      <DimmingMenu />

      {/* <AzimuthDemo /> */}
      {/* <DimmingMenu /> */}
    </div>
  );
}

export default App;
