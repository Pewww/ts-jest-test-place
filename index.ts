export const numberWithCommas = x => {
  // return String(x).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const numberX = Number(x);
  return isNaN(numberX) ? 0 : numberX.toLocaleString('en-US');
};
export const under = (n: number, max?: number = 999) => !!n
  ? n > max
    ? `${max}+`
    : n
  : 0
;

export const formatBytes = (bytes: number, decimals?: number) => {
  if (bytes === 0) { return '0 Bytes'; }

  const size = 1024;
  const dm = decimals > 0 ? decimals : 0;
  const type = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const idx = Math.floor(Math.log(bytes) / Math.log(size));

  return `${parseFloat((bytes / Math.pow(size, idx)).toFixed(dm))}.${type[idx]}`;
};

export const callOrPrice = (is_call, price, suffix = '') =>
  is_call ? '전화문의' : price === 0 ? '무료' : numberWithCommas(price) + suffix;