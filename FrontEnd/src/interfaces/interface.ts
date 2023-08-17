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
}

export interface Post {
  fullName: string;
  //CHANGE
}
