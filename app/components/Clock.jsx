import React from 'react';

class Clock extends React.Component {

  formatSeconds(totalSeconds) {
    let seconds, minutes;
    seconds = totalSeconds % 60;
    minutes = Math.floor(totalSeconds / 60);
    seconds = (seconds < 10) ? '0'+ seconds : seconds;
    minutes = (minutes < 10) ? '0'+ minutes : minutes;
    return minutes+':'+seconds;
  }
  
  render() { 
    return (
      <div>
        <h3>Clock</h3>
      </div>
    );
  }
}

export default Clock;
