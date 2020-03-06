import {setAutoComplete, getAutoComplete, clearAutoComplete} from '../source/autoComplete';

describe('autoComplete Start', () => {
  const data = {
    id: 1,
    name: '한의플래닛'
  }
  it('존재하지 않는 아이디로 getAutoComplate을 실행 할 경우 null을 반환해야 한다. ', () => {
    expect(getAutoComplete(999)).toBeNull();
  })

  it('존재하지 않는 아이디로 setAutoComplete을 실행 할 경우 null을 반환해야 한다.', () => {
    expect(setAutoComplete(null, data)).toBeNull();
  })

  it('존재하지 않는 데이터로 setAutoComplete을 실행 할 경우 null을 반황해야 한다.', () => {
    setAutoComplete(1,null);
    
    expect(getAutoComplete(2)).toBeNull();
  })

  it('정상적인 방법으로 setAutoComplete와 getAutoComplete을 실행 할 경우 원하던 결과 값을 반환해야 한다.', () => {
    setAutoComplete(2, data);
    
    expect(getAutoComplete(2)).toEqual(data);
  });

  it('정상적인 방법으로 getAutoComplete을 실행할 경우 원하던 결과 값을 반환해야 한다.', () => {
    expect(getAutoComplete(2)).toEqual(data);
  })

  it('clearAutoComplete을 실행 후 getAutoComplete을 실행 할 경우 null을 반환해야 한다.', () => {
    clearAutoComplete();
    expect(getAutoComplete(1)).toBeNull();
  })
});
