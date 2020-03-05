import {setAutoComplete, getAutoComplete, clearAutoComplete} from '../source/autoComplete';

describe('autoComplete Start', () => {
  const data = {
    id: 1,
    name: '한의플래닛'
  }
  it('get auto complete not found', () => {
    expect(getAutoComplete(999)).toBeNull();
  })

  it('set auto complete none pkId', () => {
    expect(setAutoComplete(null, data)).toBeNull();
  })

  it('set auto complete none data', () => {
    setAutoComplete(1,null);
    
    expect(getAutoComplete(2)).toBeNull();
  })

  it('set auto complete', () => {
    setAutoComplete(2, data);
    
    expect(getAutoComplete(2)).toEqual(data);
  });

  it('get auto complete', () => {
    expect(getAutoComplete(2)).toEqual(data);
  })

  it('clear auto complete', () => {
    clearAutoComplete();
    expect(getAutoComplete(1)).toBeNull();
  })
});
