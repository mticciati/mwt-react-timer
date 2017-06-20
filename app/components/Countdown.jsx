import React from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';
import Controls from 'Controls';
import PropTypes from 'prop-types';

class Countdown extends React.Component { 

  constructor(props) {
    super(props);

    this.handleSetCount = this.handleSetCount.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.state = ({ 
      count: props.count,
      countStatus: props.countStatus 
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.countStatus !== prevState.countStatus) {
      switch (this.state.countStatus) {
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
          countStatus: 'stopped'
        });
      }
    }, 1000);
  }

  handleSetCount(seconds) {
    this.setState({
      count: seconds,
      countStatus: 'started'
    });
  }

  handleStatusChange(newStatus) {
    this.setState({
      countStatus: newStatus
    });
  }

  render() {
    let {count, countStatus} = this.state;
    let renderControlArea = () => {
      if (countStatus !== 'stopped') {
        return <Controls countStatus={countStatus} onStatusChange={this.handleStatusChange} />
      }
      else {
        return <CountdownForm onSetCount={this.handleSetCount} />
      }
    }
    return (
      <div>
        <h1 className="page-title">Countdown</h1>
        <Clock totalSeconds={count} />
        {renderControlArea()}
      </div>
    )
  }
}

Countdown.propTypes = { count: PropTypes.number };
Countdown.defaultProps = { 
  count: 0,
  countStatus: 'stopped' 
};

export default Countdown;