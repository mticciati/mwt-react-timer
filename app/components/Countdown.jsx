import React from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';
import PropTypes from 'prop-types';

class Countdown extends React.Component { 

  constructor(props) {
    super(props);

    this.handleSetCountdown = this.handleSetCountdown.bind(this);
    this.tickDown = this.tickDown.bind(this);
    this.state = { count: props.count };
  }

  handleSetCountdown(seconds) {
    this.setState({
      count: seconds
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

Countdown.propTypes = { count: React.PropTypes.number };
Countdown.defaultProps = { count: 0 };

export default Countdown;