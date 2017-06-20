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

  describe('handleSetCount', () => {

    it('should set to started and countdown', (done) => {
      let countdown = ReactTestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCount(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countStatus).toBe('started');

      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        done();
      }, 1001);

    });

    it('should NOT get to negative numbers', (done) => {
      let countdown = ReactTestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCount(1);

      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        done();
      }, 2001);

    });

    it('should NOT change count when paused and have countStatus paused', (done) => {
      let countdown = ReactTestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCount(3);
      countdown.handleStatusChange('paused');

      setTimeout(() => {
        expect(countdown.state.count).toBe(3);
        expect(countdown.state.countStatus).toBe('paused');
        done();
      }, 1001);

    });

    it('should be zero on stopped and have countStatus stopped', (done) =>{
      let countdown = ReactTestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCount(3);
      countdown.handleStatusChange('stopped');

      setTimeout(() =>{
        expect(countdown.state.count).toBe(0);
        expect(countdown.state.countStatus).toBe('stopped');
        done();
      }, 1001);

    });

  });

});