import {IReview} from '../models/review-model';
import {users} from './users-mock';

export const reviews: IReview[] = [
  {
    comment:
      'air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.',
    date: 'December, 10, 2016',
    imageUrls: [
      'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    ],
    rating: 5,
    user: users[0],
  },
  {
    comment:
      'This is really amazing product, i like the design of product, I hope can buy it again!',
    date: 'December, 10, 2016',
    imageUrls: [],
    rating: 4,
    user: users[1],
  },
  {
    comment:
      'air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit',
    date: 'December, 10, 2016',
    imageUrls: [
      'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    ],
    rating: 3,
    user: users[2],
  },
  {
    comment:
      'air max are always very comfortable fit, clean and just perfect in every way. just the box was too small  ',
    date: 'December, 10, 2016',
    imageUrls: [''],
    rating: 5,
    user: users[3],
  },
];
