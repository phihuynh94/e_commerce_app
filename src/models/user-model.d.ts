interface IAddress {
  geolocation: {
    lat: string;
    long: string;
  };
  city: string;
  street: string;
  number: number;
  zipcode: string;
}

interface IName {
  firstname: string;
  lastname: string;
}

export interface IUser {
  address: IAddress;
  id: number;
  email: string;
  username: string;
  password: string;
  name: IName;
  phone: string;
  profileUrl?: string;
  __v: number;
}
