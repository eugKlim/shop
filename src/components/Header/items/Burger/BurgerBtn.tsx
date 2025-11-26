import React from 'react';
interface Props {
  isOpen: boolean;
  toggleMenu: () => void;
}

const BurgerBtn: React.FC<Props> = ({ isOpen, toggleMenu }) => {
  return (
    <button
      onClick={toggleMenu}
      className="relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
      aria-label="Toggle menu"
    >
      <span
        className={`w-7 h-0.5 bg-white rounded-full transition-all duration-300 ${
          isOpen ? 'rotate-45 translate-y-2' : ''
        }`}
      />
      <span
        className={`w-7 h-0.5 bg-white rounded-full transition-all duration-300 ${
          isOpen ? 'opacity-0' : ''
        }`}
      />
      <span
        className={`w-7 h-0.5 bg-white rounded-full transition-all duration-300 ${
          isOpen ? '-rotate-45 -translate-y-2' : ''
        }`}
      />
    </button>
  );
};

export default BurgerBtn;
