import "./dimming-mode-tabs.css";
import { ReactComponent as BrightIcon } from "../../../../assets/icons/bright-icon.svg";
import { ReactComponent as DayIcon } from "../../../../assets/icons/day-icon.svg";
import { ReactComponent as DuskIcon } from "../../../../assets/icons/dusk-icon.svg";
import { ReactComponent as NightIcon } from "../../../../assets/icons/night-icon.svg";

import styled from "styled-components";

const tabs = styled.div`
  /* box-sizing: border-box; */
  display: flex;
  flex-direction: row;
  position: relative;
  background-color: #fff;
  box-shadow: 0 0 1px 0 rgba(24, 94, 224, 0.15),
    0 6px 12px 0 rgba(24, 94, 224, 0.15);
  padding: 0.5rem;
  border-radius: 20px;
`;

function DimmingModeTabs(props) {
  return (
    <div className="tabs">
      <input type="radio" id="radio-bright" name={props.name} />
      <label className="tab" htmlFor="radio-bright">
        <BrightIcon className="icon" name="icon" />
        Bright
      </label>

      <input type="radio" id="radio-day" name={props.name} defaultChecked />
      <label className="tab" htmlFor="radio-day">
        <DayIcon className="icon" />
        Day
      </label>

      <input type="radio" id="radio-dusk" name={props.name} />
      <label className="tab" htmlFor="radio-dusk">
        <DuskIcon className="icon" />
        Dusk
      </label>

      <input type="radio" id="radio-night" name={props.name} />
      <label className="tab" htmlFor="radio-night">
        <NightIcon className="icon" />
        Night
      </label>

      <span className="glider"></span>
    </div>
  );
}

export default DimmingModeTabs;
