interface Address {
  city: string;
  street: string;
  suite: string;
  zipcode: string;
}

export interface User {
  name: string;
  email: string;
  address: Address;
  id: number;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  //CHANGE
}
