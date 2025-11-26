import { Link } from 'react-router-dom';

interface IbeforeAuthDb {
  link: string;
  name: string;
  linkStyle: string;
}
interface Props {
  beforeAuthDb: IbeforeAuthDb[];
  isAuthenticated: boolean;
  toggleMenu: () => void;
}

const BeforeAuthMenu = ({
  beforeAuthDb,
  isAuthenticated,
  toggleMenu,
  isBurger,
}: Props & { isBurger?: boolean }) => {
  if (isAuthenticated) return null;

  const handleClick = () => {
    if (isBurger) {
      toggleMenu();
    }
  };

  return (
    <div className={isBurger ? 'w-full space-y-3' : 'center space-x-3'}>
      {beforeAuthDb.map(({ link, name, linkStyle }) => (
        <Link
          to={link}
          key={link}
          onClick={handleClick}
          className={`p-2 rounded-lg border-b-2 border-gray-400 font-medium ${
            isBurger ? 'w-full text-center block' : ''
          } ${linkStyle}`}
        >
          {name}
        </Link>
      ))}
    </div>
  );
};

export default BeforeAuthMenu;
