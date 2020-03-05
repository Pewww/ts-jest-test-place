export default function push(arr, value) {
  if (!Array.isArray(arr)) {
    return [];
  }

  const newArr = [...arr, value];
  return newArr;
}
