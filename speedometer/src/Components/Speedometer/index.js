import React, { Component } from "react";
import styles from "./index.module.css";

class Speedometer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speed: 0,
    };
  }

  handleAccelerate = () => {
    console.log("Accelerate Button Clicked....");
    if (this.state.speed >= 200) {
      this.setState((prevState) => ({ speed: 200 }));
    } else {
      this.setState((prevState) => ({ speed: prevState.speed + 10 }));
    }
  };

  handleBrake = () => {
    console.log("Brake Button Clicked....");
    if (this.state.speed <= 0) {
      this.setState((prevState) => ({ speed: 0 }));
    } else {
      this.setState((prevState) => ({ speed: prevState.speed - 10 }));
    }
  };
  render() {
    return (
      <div className={styles.mainContainer}>
        <div className={styles.speedometerContainer}>
          <h1>SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
            className={styles.speedometerIcon}
          />
          <h3>Speed is {this.state.speed}mph</h3>
          <p>Min Limit is 0mph, Max Limit is 200mph</p>
          <div>
            <button onClick={this.handleAccelerate}>Accelerate</button>
            <button onClick={this.handleBrake}>Apply Brake</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Speedometer;
