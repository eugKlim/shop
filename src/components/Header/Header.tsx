import { FaShopify } from 'react-icons/fa';
import { menuDb, authDb, noAuthDb } from './Menu';
import { ROUTES } from '../../config/routes';
import { useAppSelector } from '../../hooks/redux';
import { useLogoutMutation } from '../../services/authApi';
import { IoExitOutline } from 'react-icons/io5';

const Header = () => {
  const { isAuthenticated } = useAppSelector((s) => s.auth);
  const [logout] = useLogoutMutation();

  const isAuthMenu = isAuthenticated ? authDb : noAuthDb;

  return (
    <header className=" bg-cyan-800 text-white py-3 shadow-[0px_2px_5px_0px_rgba(0,0,0,0.68)] rounded-b-xl bg-linear-to-r from-violet-600 to-indigo-600">
      <div className="container center justify-between">
        <div>
          <a
            href={ROUTES.HOME}
            className="center text-2xl font-bold hover:text-amber-200"
          >
            <FaShopify color="yellow" />
            SHOP
          </a>
        </div>

        <div className="center space-x-7">
          <nav className="center space-x-3">
            {menuDb.map(({ link, name }) => (
              <a href={link} key={link}>
                {name}
              </a>
            ))}
          </nav>

          <button>Light | dark</button>
          <div className="space-x-3">
            {isAuthMenu.map(({ name, linkStyle, link }) => (
              <a
                href={link}
                key={link}
                className={`${
                  !isAuthenticated
                    ? `p-2 rounded-lg border-b-2 border-gray-400 font-medium ${linkStyle}`
                    : ''
                } `}
                // className={`p-2 rounded-lg border-b-2 border-gray-400 font-medium ${linkStyle}`}
              >
                {name}
              </a>
            ))}
          </div>

          {isAuthenticated && (
            <button
              className="p-2 row-center rounded-lg border-b-2 border-gray-400 font-medium hover:text-gray-300"
              onClick={() => logout()}
            >
              Logout <IoExitOutline className="ml-2" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
