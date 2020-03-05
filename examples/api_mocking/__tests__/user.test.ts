import UserApi from '../apis/UserApi';
import {USER_MOCK_DATA} from '../__mocks__/user';
import axios from 'axios';

describe('UserApi 테스트', () => {
  const userApi = new UserApi();

  it('getUser 함수를 호출한 횟수 만큼 calledTimes는 증가해야 함', done => {
    const jestFn = jest.fn();
    axios.get = jestFn.mockResolvedValue(USER_MOCK_DATA);
    const spyGet = jest.spyOn(axios, 'get');

    const userId = 'A!B#@e3';

    userApi.getUser(userId).then(() => done());

    expect(spyGet).toBeCalledTimes(1);
    expect(spyGet).toBeCalledWith('https://jsonplaceholder.typicode.com/users/A!B#@e3/');

    userApi.getUser(userId).then(() => done());
    userApi.getUser(userId).then(() => done());
    userApi.getUser(userId).then(() => done());
    userApi.getUser(userId).then(() => done());
    userApi.getUser(userId).then(() => done());

    expect(spyGet).toBeCalledTimes(6);
  });

  it('getUser 함수 호출 시 user 데이터를 반환해야 함', done => {
    const jestFn = jest.fn();
    axios.get = jestFn.mockResolvedValue(USER_MOCK_DATA);

    userApi.getUser('A!B#@e3')
      .then(({data: user}) => {
        const expectedData = {
          id: 'A!B#@e3',
          name: 'Pewww',
          age: 21,
          gender: 'male',
          telephone: '010-7298-5257',
          address: '모든 곳이 내 집'
        };

        Object.keys(expectedData).forEach(key => {
          expect(user).toHaveProperty(key, expectedData[key]);
        });
        done();
      });
  });
});
