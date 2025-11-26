import React from 'react';
import MenuItem from '../MenuItem';

interface Props {
  isOpen: boolean;
  toggleMenu: () => void;
}

const BurgerMenu: React.FC<Props> = ({ toggleMenu, isOpen }) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 laptop:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      />
      <nav
        className={`fixed top-0 right-0 h-full w-80 bg-slate-800 shadow-2xl z-50 transform transition-transform duration-300 laptop:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-8">
          <MenuItem isBurger={true} toggleMenu={toggleMenu} />
        </div>
      </nav>
    </>
  );
};

export default BurgerMenu;
