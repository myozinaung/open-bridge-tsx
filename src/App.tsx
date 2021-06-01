import "openbridge-css/dist/css/openbridge.css"; //npm install openbridge-css
import AzimuthDemo from "./AzimuthDemo";
import DimmingMenu from "./components/navigation/dimming-menu/dimming-menu";
import TopNavbar from "./components/navigation/top-navbar";
function App() {
  return (
    <div className="App">
      <TopNavbar />

      <DimmingMenu />

      {/* <AzimuthDemo /> */}
      {/* <DimmingMenu /> */}
    </div>
  );
}

export default App;
