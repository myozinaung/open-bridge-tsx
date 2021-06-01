import styles from "./dimming-menu.module.css";
import DimmingModeTabs from "./dimming-mode-tabs/dimming-mode-tabs";

function DimmingMenu() {
  return (
    <div className={styles.container}>
      <DimmingModeTabs name="Dimming-Modes" />
      {/* <br />
      <DimmingModeTabs name="Tab2" />
      <br />
      <DimmingModeTabs name="Tab3" />
      <br />
      <DimmingModeTabs name="Tab4" /> */}
    </div>
  );
}

export default DimmingMenu;
