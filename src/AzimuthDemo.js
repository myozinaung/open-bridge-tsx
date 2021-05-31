import "openbridge-web-components"; // npm install openbridge-web-components
import * as React from "react";
import { fromEvent, interval, Subscription } from "rxjs"; // npm install rxjs
import { filter, timeInterval } from "rxjs/operators";

export class AzimuthDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      acc: false,
      thrust: 0,
      azimuth: 0,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      // call the function every specified time interval
      () => this.setState({ time: this.state.time + 0.03 }),
      10 // milisecond
    );

    // MYO, control thruster using keyboard
    this.subs = new Subscription();

    const keyDown = fromEvent(document, "keydown")
      .pipe(filter((e) => e.which === 38))
      .subscribe(() => this.setState({ acc: true }));

    const keyUp = fromEvent(document, "keyup")
      .pipe(filter((e) => e.which === 38))
      .subscribe(() => this.setState({ acc: false }));

    const keyInterval = interval(10)
      .pipe(timeInterval())
      .subscribe(() => {
        if (this.state.acc) {
          if (this.state.thrust < 100) {
            this.setState({ thrust: this.state.thrust + 0.5 });
          }
        } else {
          if (this.state.thrust > 0) {
            this.setState({ thrust: this.state.thrust - 0.5 });
          }
        }
      });

    this.subs.add(keyDown);
    this.subs.add(keyUp);
    this.subs.add(keyInterval);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    this.subs.unsubscribe();
  }

  handleKeyDown(e) {
    if (e.which === 38) {
      this.setState({ acc: true });
    }
  }

  handleKeyUp(e) {
    if (e.which === 38) {
      this.setState({ acc: false });
    }
  }

  render() {
    const time = this.state.time % 40;
    let angle = 45;
    let targetAngle = 45;
    let value = 60;
    let target = 60;

    if (time < 10) {
      angle = 25 + 2 * time;
      value = 10;
      target = 10;
    } else if (time < 20) {
      value = 10 + 5 * (time - 10);
    } else if (time < 30) {
      angle = 25 + 2 * (30 - time);
      targetAngle = 25;
      value = 60;
      target = 60;
    } else if (time < 40) {
      angle = 25;
      targetAngle = 25;
      value = 10 + 5 * (40 - time);
      target = 10;
    }

    const args = {
      angle: angle,
      targetAngle: targetAngle,
      showSetPointAngle: angle !== targetAngle,
      //   value: value,
      value: this.state.thrust, // MYO
      target: target,
      showSetPointValue: value !== target,
      showPortStarboard: true,
      thrusterWidth: "REGULAR",
    };

    return (
      <div className="ob-container-background-color-fill">
        <ob-azimuth-small
          style={{
            position: "absolute",
            width: 64,
            height: 64,
            top: 96,
            left: 96,
          }}
          {...args}
        />
        <ob-azimuth-medium
          style={{
            position: "absolute",
            width: 256,
            height: 256,
            top: 256,
            left: 0,
          }}
          {...args}
        />
        <ob-azimuth-large
          style={{
            position: "absolute",
            width: 512,
            height: 512,
            top: 50,
            left: 257,
          }}
          {...args}
        />

        <div style={{ width: 256, height: 256 }}>
          <ob-pitch-roll-medium
            style={{
              position: "absolute",
              width: 512,
              height: 512,
              top: 420,
              left: 257,
            }}
            lowerPitch={-2}
            lowerRoll={-2}
            pitch={2}
            roll={2}
            scale={5}
            upperPitch={3}
            upperRoll={3}
          />
        </div>
      </div>
    );
  }
}

export default AzimuthDemo;
