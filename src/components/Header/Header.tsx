import { useState } from 'react';
import Logo from './items/Logo';
import BurgerMenu from './items/Burger/BurgerMenu';
import BurgerBtn from './items/Burger/BurgerBtn';
import MenuItem from './items/MenuItem';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../config/routes';
import { useCart } from '../../hooks/useCart';
import { useAppSelector } from '../../hooks/redux';
import { useLogoutMutation } from '../../services/authApi';
import { TiShoppingCart } from 'react-icons/ti';
import { IoExitOutline } from 'react-icons/io5';

const Header = () => {
  const { totalItems } = useCart();
  const { isAuthenticated } = useAppSelector((s) => s.auth);
  const [isOpen, setIsOpen] = useState(false);
  const [logout] = useLogoutMutation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-cyan-800 text-white py-3 shadow-[0px_2px_5px_0px_rgba(0,0,0,0.68)] rounded-b-xl bg-linear-to-r from-violet-600 to-indigo-600">
      <div className="container center justify-between">
        <Logo />

        <nav className="hidden laptop:flex space-x-4 flex-1 justify-end">
          <MenuItem />
        </nav>

        <div className="flex center space-x-4 laptop:hidden">
          {isAuthenticated && (
            <Link
              to={ROUTES.CART}
              className="relative border px-3 py-1 rounded-sm center hover:bg-gray-600"
            >
              Cart <TiShoppingCart className="ml-2" />
              <span className="absolute -top-2 -right-3 text-sm w-5 text-center bg-amber-700 block rounded-full">
                {totalItems}
              </span>
            </Link>
          )}
          <BurgerBtn isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>

            {isAuthenticated && (
          <div className="hidden laptop:flex center space-x-4">
            <Link
              to={ROUTES.CART}
              className="relative border px-3 py-1 rounded-sm center ml-3 hover:bg-gray-600"
            >
              Cart <TiShoppingCart className="ml-2" />
              <span className="absolute -top-2 -right-3 text-sm w-5 text-center bg-amber-700 block rounded-full">
                {totalItems}
              </span>
            </Link>

            <button
              onClick={() => logout()}
              className="p-2 row-center rounded-lg border-b-2 border-gray-400 font-medium hover:text-gray-300"
            >
              Logout <IoExitOutline className="ml-2" />
            </button>
          </div>
        )}

        <BurgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
    </header>
  );
};

export default Header;
