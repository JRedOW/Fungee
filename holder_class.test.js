const holderClass = require('./holder_class');

describe('holderClass', () => {
  describe('sum', () => {
    it('calculates properly', () => {
      expect(holderClass.sum(2,3)).toEqual(2+3);
    });
  });
});
