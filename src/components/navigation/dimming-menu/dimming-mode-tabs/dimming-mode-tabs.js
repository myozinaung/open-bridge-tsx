import styles from "./dimming-mode-tabs.module.css";
import { ReactComponent as BrightIcon } from "../../../../assets/icons/bright-icon.svg";
import { ReactComponent as DayIcon } from "../../../../assets/icons/day-icon.svg";
import { ReactComponent as DuskIcon } from "../../../../assets/icons/dusk-icon.svg";
import { ReactComponent as NightIcon } from "../../../../assets/icons/night-icon.svg";

function DimmingModeTabs(props) {
  return (
    <div className={styles.tabs}>
      <input type="radio" id="radio-bright" name={props.name} />
      <label className={styles.tab} htmlFor="radio-bright">
        <BrightIcon className={styles.icon} />
        Bright
      </label>

      <input type="radio" id="radio-day" name={props.name} />
      <label className={styles.tab} htmlFor="radio-day">
        <DayIcon className={styles.icon} />
        Day
      </label>

      <input type="radio" id="radio-dusk" name={props.name} />
      <label className={styles.tab} htmlFor="radio-dusk">
        <DuskIcon className={styles.icon} />
        Dusk
      </label>

      <input type="radio" id="radio-night" name={props.name} />
      <label className={styles.tab} htmlFor="radio-night">
        <NightIcon className={styles.icon} />
        Night
      </label>

      <span className={styles.glider}></span>
    </div>
  );
}

export default DimmingModeTabs;
