import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import expect, { createSpy, isSpy, spyOn } from 'expect';

import Timer from 'Timer';

var $ = require('jQuery');

describe('Timer', () =>{

  it('should exist', () => {
    expect(Timer).toExist();
  });

  describe('handleSetCount', () => {

    it('should set started and begin count', (done) => {
      let timer = ReactTestUtils.renderIntoDocument(<Timer />);
      timer.handleSetCount();

      expect(timer.state.countStatus).toBe('started');

      setTimeout(()=> {
        expect(timer.state.count).toBe(2);
        done();
      }, 2001)

    });

    it('should count up', (done) => {
      let timer = ReactTestUtils.renderIntoDocument(<Timer />);
      timer.handleSetCount();

      setTimeout(() => {
        expect(timer.state.countStatus).toBe('started');
        expect(timer.state.count).toBe(3);
        done();
      }, 3001);
    });

    it('should NOT count while paused and show countStatus paused', (done) => {
      let timer = ReactTestUtils.renderIntoDocument(<Timer />);
      timer.handleStatusChange('paused');

      setTimeout(() => {
        expect(timer.state.countStatus).toBe('paused');
        expect(timer.state.count).toBe(0);
        done();
      }, 2000);
    });

    it('should have count zero and countStatus stopped when stopped', (done) => {
      let timer = ReactTestUtils.renderIntoDocument(<Timer />);
      timer.handleSetCount();

      setTimeout(() => {
        expect(timer.state.countStatus).toBe('started');
        expect(timer.state.count).toBe(1);

        timer.handleStatusChange('stopped');
      }, 1001);

      setTimeout(() => {
        expect(timer.state.countStatus).toBe('stopped');
        expect(timer.state.count).toBe(0);
        done();
      }, 2001);

    });

  });

});