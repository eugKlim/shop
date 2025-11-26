import { ROUTES } from '../../config/routes';

export const publicMenuDb = [
  {
    name: 'Home',
    link: ROUTES.HOME,
  },
];

export const beforeAuthDb = [
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
