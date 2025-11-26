import type { Theme } from '../../../Providers/ThemeProvider';

interface Props {
  theme: Theme;
  isBurger: boolean;
  handleToggleTheme: (selectTheme: string) => void;
}

const ThemeBtn: React.FC<Props> = ({ handleToggleTheme, theme, isBurger }) => {
  return (
    <select
      className={`cursor-pointer border rounded-sm text-white py-1 px-2 ${
        isBurger && 'w-full'
      }`}
      onChange={(e) => handleToggleTheme(e.target.value)}
      value={theme}
    >
      <option value="light" className="text-black">
        Light
      </option>
      <option value="dark" className="text-black">
        Dark
      </option>
    </select>
  );
};

export default ThemeBtn;
