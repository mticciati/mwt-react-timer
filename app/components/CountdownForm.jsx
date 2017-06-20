import React from 'react';

class CountdownForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);

  }

  onSubmit(e) {
    e.preventDefault();
    var strSeconds = this.refs.seconds.value;

    if (strSeconds.match(/^[0-9]*$/)) {
      this.refs.seconds.value = '';
      this.props.onSetCount(parseInt(strSeconds, 10));
    }
  }

  render() {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
          <input type="text" ref="seconds" placeholder="Enter number of seconds" />
          <button className="button expanded">Start</button>
        </form>
      </div>
    )
  }
}

export default CountdownForm;