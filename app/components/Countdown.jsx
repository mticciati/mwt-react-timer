import React from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';
import PropTypes from 'prop-types';

class Countdown extends React.Component { 

  constructor(props) {
    super(props);

    this.handleSetCountdown = this.handleSetCountdown.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.tickDown = this.tickDown.bind(this);
    this.state = ({ 
      count: props.count,
      countdownStatus: props.countdownStatus 
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
      }
    }
  }

  startTimer() {
    this.timer = setInterval(() => {
      let newCount = this.state.count - 1;
      this.setState({
        count: (newCount >= 0) ? newCount : 0
      });
    }, 1000);
  }

  handleSetCountdown(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  }

  tickDown() {
    this.setState({ count: this.state.count - 1 });
  }
  
  render() {
    let {count} = this.state;
    return (
      <div>
        <Clock totalSeconds={count} />
        <CountdownForm onSetCountdown={this.handleSetCountdown} />
      </div>
    )
  }
}

Countdown.propTypes = { count: PropTypes.number };
Countdown.defaultProps = { 
  count: 0,
  countdownStatus: 'stopped' 
};

export default Countdown;