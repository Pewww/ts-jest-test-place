import sum from '../';

describe('sum function test', () => {
  it('1 + 2 = 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
