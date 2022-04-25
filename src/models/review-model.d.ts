import {IUser} from './user-model';

export interface IReview {
  comment: string;
  date: string;
  imageUrls: string[];
  rating: number;
  user: IUser;
}
