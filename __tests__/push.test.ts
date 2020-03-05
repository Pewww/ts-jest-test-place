import push from "../push";

// describe('array value', () => {
//   it ('array value', () => {
//     const array = [{a: 'a', num: 3}];

//     const newArray = [...array, array[0].a];
//     expect(push(array, array[0].a)).toEqual(newArray);
//   });
// })

describe("let's Push", () => {
  const arr = ['p','u','s','h'];
  it('default push', () => {
    const newArr = push(arr,'hi');
    expect(newArr).toHaveLength(5);
    // expect(push(arr,'hi')).toEqual(['p','u','s','h','hi']);
  })

  it('fail push', () => {
    expect(push(1, 1)).toEqual([]);

  })
})