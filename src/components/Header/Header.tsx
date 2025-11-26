import { Link } from 'react-router-dom';
import { IoExitOutline } from 'react-icons/io5';
import { publicMenuDb, beforeAuthDb } from './MenuDb';
import { ROUTES } from '../../config/routes';
import { useAppSelector } from '../../hooks/redux';
import { useLogoutMutation } from '../../services/authApi';
import { useCart } from '../../hooks/useCart';
import NavigationItem from './items/NavigationItem';
import BeforeAuthMenu from './items/BeforeAuthMenu';
import ThemeBtn from './items/ThemeBtn';
import { useTheme } from '../../Providers/ThemeProvider';
import Logo from './items/Logo';
// import AuthMenu from './items/AuthMenu';

const Header = () => {
  const { isAuthenticated } = useAppSelector((s) => s.auth);
  const { handleToggleTheme, theme } = useTheme();
  const [logout] = useLogoutMutation();
  const { totalItems } = useCart();

  // const isAuthMenu = isAuthenticated ? authDb : beforeAuthDb;

  return (
    <header className=" bg-cyan-800 text-white py-3 shadow-[0px_2px_5px_0px_rgba(0,0,0,0.68)] rounded-b-xl bg-linear-to-r from-violet-600 to-indigo-600">
      <div className="container center justify-between">
        {/* <Link to="/admin">Admin</Link>
        <Link to="/manager">Manager</Link> */}
        <Logo />

        <div className="center space-x-7">
          <nav className="row-center space-x-4">
            <NavigationItem publicMenuDb={publicMenuDb} />

            {/* <AuthMenu isAuthMenu={isAuthMenu} isAuthenticated={isAuthenticated} /> */}
            <ThemeBtn handleToggleTheme={handleToggleTheme} theme={theme} />

            <BeforeAuthMenu
              beforeAuthDb={beforeAuthDb}
              isAuthenticated={isAuthenticated}
            />
          </nav>

          {isAuthenticated && (
            <>
              <Link to={ROUTES.CART} className="relative mr-10">
                Cart{' '}
                <span className="absolute -top-2 -right-6 text-sm w-5 text-center bg-amber-700 block rounded-full">
                  {totalItems}
                </span>
              </Link>

              <button
                className="p-2 row-center rounded-lg border-b-2 border-gray-400 font-medium hover:text-gray-300"
                onClick={() => logout()}
              >
                Logout <IoExitOutline className="ml-2" />
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
