import { ROUTES } from '../config/routes';

export const menuDb = [
  {
    name: 'Home',
    link: ROUTES.HOME,
  },
  {
    name: 'Cart',
    link: ROUTES.CART,
  },
];

export const authDb = [
  {
    name: 'Login',
    link: ROUTES.LOGIN,
    linkStyle: 'hover:text-gray-400',
  },
  {
    name: 'Registration',
    link: ROUTES.REGISTER,
    linkStyle: 'bg-amber-700 hover:bg-amber-800',
  },
];
