import React from 'react';
import ReactDOM from 'react-dom';
import expect, { createSpy, spyOn, isSpy } from 'expect';
import ReactTestUtils from 'react-dom/test-utils';
import Countdown from 'Countdown';

var $ = require('jQuery');

describe('Countdown', () => {

  it('should exist', () =>{
    expect(Countdown).toExist();
  });

  describe('handleSetCountdown', () => {

    it('should set to started and countdown', (done) => {
      let countdown = ReactTestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCountdown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');

      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        done();
      }, 1001);

    });

    it('should NOT get to negative numbers', (done) => {
      let countdown = ReactTestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCountdown(1);

      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        done();
      }, 2001);

    });

    it('should NOT change count when paused and have countdownStatus paused', (done) => {
      let countdown = ReactTestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('paused');

      setTimeout(() => {
        expect(countdown.state.count).toBe(3);
        expect(countdown.state.countdownStatus).toBe('paused');
        done();
      }, 1001);

    });

    it('should be zero on stopped and have countdownStatus stopped', (done) =>{
      let countdown = ReactTestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('stopped');

      setTimeout(() =>{
        expect(countdown.state.count).toBe(0);
        expect(countdown.state.countdownStatus).toBe('stopped');
        done();
      }, 1001);

    });

  });

});