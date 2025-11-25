import { Link } from 'react-router-dom';

interface IPublicMenuItem {
  link: string;
  name: string;
}
interface Props {
  publicMenuDb: IPublicMenuItem[];
}

const NavigationItem = ({ publicMenuDb }: Props) => {
  return (
    <div className="center space-x-3">
      {publicMenuDb.map(({ link, name }) => (
        <Link to={link} key={link}>
          {name}
        </Link>
      ))}
    </div>
  );
};

export default NavigationItem;
