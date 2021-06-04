import { isTemplateLiteralTypeSpan } from "typescript";
import styles from "./auto-brightness-toggle.module.css";

function AutoBrightnessToggle(props) {
  return (
    <div className={styles.toggleContainer}>
      <div className={styles.toggleName}>Auto Brightness</div>
      <div className={styles.toggle}>
        <input id="auto-bright-toggle" type="checkbox" />
        <label className={styles.toggleItem} for="auto-bright-toggle"></label>
      </div>
    </div>
  );
}

export default AutoBrightnessToggle;
