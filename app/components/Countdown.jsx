import React from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';
import Controls from 'Controls';
import PropTypes from 'prop-types';

class Countdown extends React.Component { 

  constructor(props) {
    super(props);

    this.handleSetCountdown = this.handleSetCountdown.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
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
        case 'stopped':
          this.setState({
            count: 0
          });
        case 'paused': 
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = undefined;
  }

  startTimer() {
    this.timer = setInterval(() => {
      let newCount = this.state.count - 1;
      this.setState({
        count: (newCount >= 0) ? newCount : 0
      });

      if (newCount === 0) {
        this.setState({
          countdownStatus: 'stopped'
        });
      }
    }, 1000);
  }

  handleSetCountdown(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  }

  handleStatusChange(newStatus) {
    this.setState({
      countdownStatus: newStatus
    });
  }

  render() {
    let {count, countdownStatus} = this.state;
    let renderControlArea = () => {
      if (countdownStatus !== 'stopped') {
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />
      }
      else {
        return <CountdownForm onSetCountdown={this.handleSetCountdown} />
      }
    }
    return (
      <div>
        <Clock totalSeconds={count} />
        {renderControlArea()}
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