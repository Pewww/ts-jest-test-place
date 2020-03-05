import {callOrPrice, formatBytes, numberWithCommas, under} from "../index";

describe('numberWithCommas', () => {
  it('isNan', () => {
    expect(numberWithCommas(NaN)).toBe(0);
  });

  it('string', () => {
    expect(numberWithCommas('4')).toMatch('4');
  });

  it('shortNum', () => {
    expect(numberWithCommas(4)).toMatch('4');
  });

  it('longNum', () => {
    expect(numberWithCommas(4000)).toMatch('4,000');
  });
});

describe('under', () => {
  const bigN = 10000;
  const smallN = 55;

  it('n is null', () => {
    expect(under(null, 100)).toBe(0);
  });

  it('only n, n > 999', () => {
    expect(under(bigN)).toBe('999+');
  });

  it('only n, n < 999', () => {
    expect(under(smallN)).toBe(smallN);
  });

  it('n and max, n > max', () => {
    expect(under(bigN, 9999)).toBe('9999+');
  });

  it('n and max, n <= max', () => {
    expect(under(bigN, bigN + 1)).toBe(bigN);
  });
});

describe('formatBytes', () => {
  const size = 1024;
  const type = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const data = {
    'Bytes': size,
    'KB': Math.pow(size,3),
    'MB': Math.pow(size,6),
    'GB': Math.pow(size,9),
    'TB': Math.pow(size,12),
    'PB': Math.pow(size,15),
    'EB': Math.pow(size,18),
    'ZB': Math.pow(size,21),
    'YB': Math.pow(size,24)
  };

  const decimals = 99;
  it('bytes === 0', () => {
    expect(formatBytes(0)).toMatch('0 Bytes');
  });

  Object.keys(data).map((key) => {
    const idx = Math.floor(Math.log(data[key]) / Math.log(size));

    it(`${key} no decimals`, () => {
      expect(formatBytes(data[key])).toMatch(`${parseFloat((data[key] / Math.pow(size, idx)).toFixed(0))}.${type[idx]}`)
    });

    it(`${key} and decimals`, () => {
      expect(formatBytes(data[key], decimals)).toMatch(`${parseFloat((data[key] / Math.pow(size, idx)).toFixed(99))}.${type[idx]}`)
    })
  });
});

describe('callOrPrice', () => {
  const shortNum = 500;
  const shortNumString = '500';
  const longNum = 500000;
  const longNumString = '500,000';
  const suffix = 'w2r3s3';

  it('is_call is true', () => {
    expect(callOrPrice(true, longNum, 'asdf')).toMatch('전화문의');
  });

  it('price === 0', () => {
    expect(callOrPrice(false, 0)).toMatch('무료');
  });

  it('price short num, no suffix', () => {
    expect(callOrPrice(false, shortNum)).toMatch(shortNumString);
  });

  it('price short num, suffix', () => {
    expect(callOrPrice(false, shortNum, suffix)).toMatch(shortNumString + suffix);
  });

  it('price long num, no suffix', () => {
    expect(callOrPrice(false, longNum)).toMatch(longNumString);
  });

  it('price long num, suffix', () => {
    expect(callOrPrice(false, longNum, suffix)).toMatch(longNumString + suffix);
  });
});