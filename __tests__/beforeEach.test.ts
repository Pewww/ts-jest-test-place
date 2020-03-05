describe('beforeEach 테스트', () => {
  let num = 0;

  afterEach(() => {
    num += 1;
  });
  
  it('', () => {});
  // 1

  it('', () => {});
  // 2

  it('', () => {});
  // 3
  it('num은 최종적으로 3가 되어야 한다', () => {
    expect(num).toBe(3);
  });

  // 4로 변한 상태
});
