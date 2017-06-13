import React from 'react';
import PropTypes from 'prop-types';

class Clock extends React.Component {

  constructor(props) {
    super(props);
  }

  formatSeconds(totalSeconds) {
    let seconds, minutes;
    seconds = totalSeconds % 60;
    minutes = Math.floor(totalSeconds / 60);
    seconds = (seconds < 10) ? '0'+ seconds : seconds;
    minutes = (minutes < 10) ? '0'+ minutes : minutes;
    return minutes+':'+seconds;
  }
  
  render() { 
    let { totalSeconds } = this.props;
    return (
      <div className="clock">
        <span className="clock-text">
          { this.formatSeconds(totalSeconds)}
        </span>
      </div>
    );
  }
}

Clock.propTypes = {
  totalSeconds: PropTypes.number
};

Clock.defaultProps = {
  totalSeconds: 0
};

export default Clock;
