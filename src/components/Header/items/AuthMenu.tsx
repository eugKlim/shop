interface IIsAuthMenu {
  name: string;
  link: string;
  linkStyle: string;
}

interface Props {
  isAuthMenu: IIsAuthMenu[];
  isAuthenticated: boolean;
}

const AuthMenu = ({ isAuthMenu, isAuthenticated }: Props) => {
  console.log(isAuthMenu);
  return (
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
        >
          {name}
        </a>
      ))}
    </div>
  );
};

export default AuthMenu;
