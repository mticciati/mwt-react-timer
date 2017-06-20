import React from 'react';
import Clock from 'Clock';
import Controls from 'Controls';
import CountdownForm from 'CountdownForm';
import PropTypes from 'prop-types';

class Timer extends React.Component {

  constructor(props) {
    super(props);

    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleSetCount = this.handleSetCount.bind(this);
    this.tick = this.tick.bind(this);

    this.state = ({
      count: props.count,
      countStatus: props.countStatus
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.countStatus !== prevState.countStatus) {
      switch  (this.state.countStatus) {
        case 'started':
          this.tick();
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

  handleStatusChange(newStatus) {
    this.setState({
      countStatus: newStatus
    });

    if (newStatus === 'started') {
      this.handleSetCount();
    }
  }

  handleSetCount() {
    this.setState({
      countStatus: 'started'
    });
  }

  tick() {
    this.timer = setInterval(() => {
      let newCount = this.state.count + 1;
      this.setState({
        count: newCount
      });

    }, 1000)
  }

  render() {
    let {count, countStatus} = this.state;
    return (
      <div>
        <h1 className="page-title">Timer</h1>
        <Clock totalSeconds={count}/>
        <Controls countStatus={countStatus} onStatusChange={this.handleStatusChange} />
      </div>
    );
  }
  
}

Timer.propTypes = {
  count: PropTypes.number
}

Timer.defaultProps = {
  count: 0,
  countStatus: 'stopped'
}

export default Timer;