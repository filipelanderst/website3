import React from 'react';
import { Link } from 'react-router-dom';

const MenuDesktop = () => {
  function startOfPage() {
    return window.scrollTo(0, 0);
  }
  return (
    <div>
      <ul className='anima-top flex items-center px-4 pt-2'>
        <li className='mr-6 border-b-2 border-transparent hover:border-slate-600'>
          <Link onClick={startOfPage} to='/'>
            Início
          </Link>
        </li>
        <li className='mr-6 border-b-2 border-transparent hover:border-slate-600'>
          <Link onClick={startOfPage} to='/Projetos'>
            Projetos
          </Link>
        </li>
        <li className='mr-6 border-b-2 border-transparent hover:border-slate-600'>
          <Link onClick={startOfPage} to='/SobreMim'>
            Sobre mim
          </Link>
        </li>
        <li className='mr-6 border-b-2 border-transparent hover:border-slate-600'>
          <a
            href='https://github.com/filipelanderst'
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
