import styles from "./dimming-menu.module.css";
import DimmingModeTabs from "./dimming-mode-tabs/dimming-mode-tabs";
import AutoBrightnessToggle from "./auto-brightness-toggle/auto-brightness-toggle";

function DimmingMenu() {
  return (
    <div className={styles.container}>
      <AutoBrightnessToggle />
      <DimmingModeTabs name="Dimming-Modes" />
    </div>
  );
}

export default DimmingMenu;
