import styles from "./dimming-menu.module.css";
import DimmingModeTabs from "./dimming-mode-tabs/dimming-mode-tabs";
import AutoBrightnessToggle from "./auto-brightness-toggle/auto-brightness-toggle";
import DarkModeToggle from "./dark-mode-toggle/drak-mode-toggle";

function DimmingMenu() {
  return (
    <div className={styles.container}>
      <AutoBrightnessToggle />
      <DarkModeToggle />
      <DimmingModeTabs name="Dimming-Modes" />
    </div>
  );
}

export default DimmingMenu;
