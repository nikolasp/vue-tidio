/* global describe, it, before */

import chai from 'chai';
import VueTidio from '../lib/vue-tidio';

chai.expect();

const expect = chai.expect;

describe('Given an instance of Vue plugin', () => {
  describe('when I need install function', () => {
    it('should return function', () => {
      expect(VueTidio).to.haveOwnProperty('install');
    });
  });
});
