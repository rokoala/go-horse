import React from "react";

class Timer extends React.PureComponent {
  state = {
    minutes: "02",
    seconds: "34",
    interval: null
  };
  componentDidMount() {
    this.start();
  }
  tick = () => {
    let sec = parseInt(this.state.seconds, 10);
    let min = parseInt(this.state.minutes, 10);
    if (sec === 0 && min === 0) {
      clearInterval(this.state.interval);
      this.props.onTimeOver();
    } else {
      if (sec === 0) {
        sec = 59;
        if (min > 0) min--;
      } else sec--;

      this.setState({
        minutes: "0" + min,
        seconds: sec >= 10 ? sec : "0" + sec
      });
    }
  };
  start() {
    this.setState({
      interval: setInterval(() => {
        this.tick();
      }, 1000)
    });
  }
  render() {
    return <div>{`${this.state.minutes}:${this.state.seconds}`}</div>;
  }
}

export default Timer;
