import React from 'react';
import { Link } from 'react-router-dom';

const MenuDesktop = () => {
  return (
    <div>
      <ul className='anima-top flex items-center px-4 pt-2'>
        <li className='mr-6 border-b-2 border-transparent hover:border-slate-600'>
          <Link to='/'>Início</Link>
        </li>
        <li className='mr-6 border-b-2 border-transparent hover:border-slate-600'>
          <Link to='/Projetos'>Projetos</Link>
        </li>
        <li className='mr-6 border-b-2 border-transparent hover:border-slate-600'>
          <Link to='/SobreMim'>Sobre mim</Link>
        </li>
        <li className='mr-6 border-b-2 border-transparent hover:border-slate-600'>
          <a
            href='https://github.com/flx-lander7'
            target='_blank'
            translate='no'
          >
            Github
          </a>
        </li>
        <li className='mr-2 border-b-2 border-transparent hover:border-slate-600'>
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
  );
};

export default MenuDesktop;
