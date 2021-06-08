import styles from "./dark-mode-toggle.module.css";

function DarkModeToggle(props) {
  return (
    <div className={styles.toggleContainer}>
      <div className={styles.toggleName}>Dark Mode</div>
      <div>
        <label id="switch" className={styles.toggle}>
          <input type="checkbox" onchange={toggleTheme()} id="slider" />
          <span className={styles.slider}></span>
        </label>
      </div>
    </div>
  );
}

function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem("theme") === "themeDark") {
    setTheme("themeLight");
  } else {
    setTheme("themeDark");
  }
}

// Immediately invoked function to set the theme on initial load
// (function () {
//   if (localStorage.getItem("theme") === "themeDark") {
//     setTheme("themeDark");
//     document.getElementById("slider").checked = false;
//   } else {
//     setTheme("themeLight");
//     document.getElementById("slider").checked = true;
//   }
// })();

export default DarkModeToggle;
