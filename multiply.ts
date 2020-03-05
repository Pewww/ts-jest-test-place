function multiply(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    return 0;
  }

  return x * y;
}

export default multiply;
