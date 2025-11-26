import { IoExitOutline } from 'react-icons/io5';
import { publicMenuDb, beforeAuthDb } from '../MenuDb';
import NavigationItem from '../items/NavigationItem';
import BeforeAuthMenu from '../items/BeforeAuthMenu';
import ThemeBtn from '../items/ThemeBtn';
import { useLogoutMutation } from '../../../services/authApi';
import { useTheme } from '../../../Providers/ThemeProvider';
import { useAppSelector } from '../../../hooks/redux';

interface MenuItemProps {
  isBurger?: boolean;
  toggleMenu?: () => void;
}

const MenuItem = ({ isBurger = false, toggleMenu }: MenuItemProps) => {
  const { isAuthenticated } = useAppSelector((s) => s.auth);
  const { handleToggleTheme, theme } = useTheme();
  const [logout] = useLogoutMutation();

  const handleLogout = () => {
    logout();
    if (isBurger && toggleMenu) {
      toggleMenu();
    }
  };

  return (
    <nav
      className={
        isBurger
          ? 'flex flex-col space-y-5 py-8 w-full'
          : 'row-center space-x-4'
      }
    >
      <NavigationItem
        publicMenuDb={publicMenuDb}
        isBurger={isBurger}
        toggleMenu={toggleMenu || (() => {})}
      />

      <div className={isBurger ? 'w-full' : ''}>
        <ThemeBtn
          handleToggleTheme={handleToggleTheme}
          theme={theme}
          isBurger={isBurger}
        />
      </div>

      <BeforeAuthMenu
        beforeAuthDb={beforeAuthDb}
        isAuthenticated={isAuthenticated}
        toggleMenu={toggleMenu || (() => {})}
        isBurger={isBurger}
      />

      {isAuthenticated && isBurger && (
        <button
          onClick={handleLogout}
          className="p-2 row-center rounded-lg border-b-2 border-gray-400 font-medium hover:text-gray-300 w-full justify-center mt-auto"
        >
          Logout <IoExitOutline className="ml-2" />
        </button>
      )}
    </nav>
  );
};

export default MenuItem;
