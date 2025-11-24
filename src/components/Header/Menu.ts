import { ROUTES } from '../../config/routes';

export const menuDb = [
  {
    name: 'Home',
    link: ROUTES.HOME,
  },
];

export const noAuthDb = [
  {
    name: 'Login',
    link: ROUTES.LOGIN,
    linkStyle: 'hover:text-gray-300',
  },
  {
    name: 'Registration',
    link: ROUTES.REGISTER,
    linkStyle:
      'bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-700',
  },
];

export const authDb = [
  {
    name: 'Cart',
    link: ROUTES.CART,
    linkStyle: '',
  },
];
