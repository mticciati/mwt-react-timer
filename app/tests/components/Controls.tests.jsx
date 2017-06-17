import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import expect, { createSpy, isSpy, spyOn } from 'expect';
import Controls from 'Controls';

var $ = require('jQuery');

describe('Controls', () => {

  it('should exist', () => {
    expect(Controls).toExist();
  });

  describe('render', () =>{

    it('should render pause button when started', () => {

      let controls = ReactTestUtils.renderIntoDocument(<Controls countdownStatus='started' />);
      let $el = $(ReactDOM.findDOMNode(controls));
      let $pauseButton = $el.find('button:contains(Pause)');

      expect($pauseButton.length).toBe(1);

    });

    it('should render start button when paused', () => {

      let controls = ReactTestUtils.renderIntoDocument(<Controls countdownStatus='paused' />);
      let $el = $(ReactDOM.findDOMNode(controls));
      let $startButton = $el.find('button:contains(Start)');

      expect($startButton.length).toBe(1);

    });

  });

});