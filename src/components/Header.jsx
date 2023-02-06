import React, { useState } from 'react';
import { Cross as Hamburger } from 'hamburger-react';
import { Link } from 'react-router-dom';
import MenuDesktop from './MenuDesktop';

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <div>
      <div className='menu bg-green-100 text-sm flex justify-between items-center max-w-fullhd mx-auto px-2 -mt-2 '>
        <Link className={isOpen ? 'hide-logo' : ''} to='/'>
          <div className='logo py-3 mt-2'>FL</div>
        </Link>
        <div className='hidden lg:block pt-1'>
          <MenuDesktop />
        </div>

        <div className='lg:hidden pt-1'>
          <Hamburger size={22} toggled={isOpen} toggle={setOpen} />
        </div>
      </div>

      <div className={isOpen ? 'menu-open' : 'menu-close'}>
        <ul>
          <li onClick={handleMenu}>
            <Link to='/'>Início</Link>
          </li>
          <li onClick={handleMenu}>
            <Link to='/Projetos'>Projetos</Link>
          </li>
          <li onClick={handleMenu}>
            <Link to='/SobreMim'>Sobre Mim</Link>
          </li>
          <li>
            <a
              href='https://github.com/flx-lander7'
              target='_blank'
              translate='no'
            >
              Github
            </a>
          </li>
          <li>
            <a
              href='https://linkedin.com/in/filipelander'
              target='_blank'
              translate='no'
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
