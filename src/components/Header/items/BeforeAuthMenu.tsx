import { Link } from 'react-router-dom';

interface IbeforeAuthDb {
  link: string;
  name: string;
  linkStyle: string;
}
interface Props {
  beforeAuthDb: IbeforeAuthDb[];
  isAuthenticated: boolean;
}

const BeforeAuthMenu = ({ beforeAuthDb, isAuthenticated }: Props) => {
  if (isAuthenticated) return;
  return (
    <div className="center space-x-3">
      {beforeAuthDb.map(({ link, name, linkStyle }) => (
        <Link
          to={link}
          key={link}
          className={`p-2 rounded-lg border-b-2 border-gray-400 font-medium ${linkStyle}`}
        >
          {name}
        </Link>
      ))}
    </div>
  );
};

export default BeforeAuthMenu;
