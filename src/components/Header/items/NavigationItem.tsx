import { Link } from 'react-router-dom';

interface IPublicMenuItem {
  link: string;
  name: string;
}
interface Props {
  publicMenuDb: IPublicMenuItem[];
  isBurger: boolean;
  toggleMenu: () => void;
}

const NavigationItem = ({ publicMenuDb, isBurger, toggleMenu }: Props) => {
  const handleClick = () => {
    if (isBurger) {
      toggleMenu();
    }
  };

  return (
    <div className={isBurger ? 'w-full space-y-3' : 'center space-x-3'}>
      {publicMenuDb.map(({ link, name }) => (
        <Link
          to={link}
          key={link}
          onClick={handleClick}
          className={
            isBurger
              ? 'w-full bg-blue-600 block py-2 rounded-sm hover:bg-blue-700 text-center'
              : ''
          }
        >
          {name}
        </Link>
      ))}
    </div>
  );
};

export default NavigationItem;
