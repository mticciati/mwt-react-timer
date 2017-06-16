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

  });

});