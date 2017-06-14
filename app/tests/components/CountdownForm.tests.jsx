import React from 'react';
import ReactDOM from 'react-dom';
import expect, { createSpy, isSpy, spyOn } from 'expect';
import ReactTestUtils from 'react-dom/test-utils';
import CountdownForm from 'CountdownForm';

var $ = require('jQuery');

describe('CountdownForm', () => {

  it('should exist', () => {
    expect(CountdownForm).toExist();
  });

  it('should call onSetCountdown if valid seconds entered', () => {
    let spy = expect.createSpy();
    let countdownForm = ReactTestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
    let $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = 101;
    ReactTestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(101);
  });

  it('should NOT call onSetCountdown if valid seconds entered', () => {
    let spy = expect.createSpy();
    let countdownForm = ReactTestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
    let $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = 'One ring to rule them all...';
    ReactTestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });

});