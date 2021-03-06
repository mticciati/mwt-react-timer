import React from 'react';
import PropTypes from 'prop-types';

class Controls extends React.Component {

  constructor(props) {
    super(props);

    this.onStatusChange = this.onStatusChange.bind(this);
  }

  onStatusChange(newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    }
  }

  render() {
    let { countStatus } = this.props;
    let renderStartStopButton = () => {
      if (countStatus === 'started') {
        return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>;
      }
      else {
        return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>;
      }
    }
    return (  
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    );
  } 
}

Controls.propTypes = {
  countStatus: PropTypes.string.isRequired,
  onStatusChange: PropTypes.func.isRequired
}

export default Controls;