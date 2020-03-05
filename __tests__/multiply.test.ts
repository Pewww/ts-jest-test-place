import multiply from "../multiply";

describe('multiply 함수를 테스트 할 것 입니다!', () => {
  it('hi', () => {
    expect(multiply(10, 'hi')).toBe(0);
  });

  it('2 * 3 = 6', () => {
    const x = 2;
    const y = 3;

    expect(multiply(x, y)).toBe(6);
  });

  it('10 * 3 = 30', () => {
    expect(multiply(10, 3)).toBe(30);
  });
});
