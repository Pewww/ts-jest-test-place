interface IUser {
  id: string;
  name: string;
  age: number;
  gender: 'male' | 'female';
  telephone: string;
  address: string;
}

interface IResponseUserForm {
  data: IUser;
}

export const USER_MOCK_DATA: IResponseUserForm = {
  data: {
    id: 'A!B#@e3',
    name: 'Pewww',
    age: 21,
    gender: 'male',
    telephone: '010-7298-5257',
    address: '모든 곳이 내 집'
  }
};
