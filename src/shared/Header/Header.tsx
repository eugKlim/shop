import { FaShopify } from 'react-icons/fa';
import { menuDb, authDb } from './Menu';

const Header = () => {
  return (
    <header className=" bg-cyan-800 text-white py-3">
      <div className="container center justify-between">
        <div>
          <a
            href="#"
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
            {authDb.map(({ name, linkStyle, link }) => (
              <a
                href={link}
                key={link}
                className={`p-2 rounded-lg border-b-2 border-gray-400 font-medium ${linkStyle}`}
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
