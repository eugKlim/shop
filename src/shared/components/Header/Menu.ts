import { ROUTES } from '../../config/routes';

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
    linkStyle: 'hover:text-gray-300',
  },
  {
    name: 'Registration',
    link: ROUTES.REGISTER,
    linkStyle:
      'bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-700',
  },
];
