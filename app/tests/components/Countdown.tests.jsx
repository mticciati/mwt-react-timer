import React from 'react';
import ReactDOM from 'react-dom';
import expect, { createSpy, isSpy, spyOn } from 'expect';
import ReactTestUtils from 'react-dom/test-utils';
import Countdown from 'Countdown';

var $ = require('jQuery');

describe('Countdown', () => {

  it('should exist', () => {
    expect(Countdown).toExist();
  });


});